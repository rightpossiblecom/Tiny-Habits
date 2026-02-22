import 'package:flutter/material.dart';
import '../../core/models/habit.dart';
import '../../core/models/habit_log.dart';
import '../../core/services/storage_service.dart';
import 'package:intl/intl.dart';

class HomeViewModel extends ChangeNotifier {
  final StorageService _storageService;

  HomeViewModel(this._storageService) {
    _loadData();
  }

  bool _isLoading = false;
  bool get isLoading => _isLoading;

  List<Habit> _habits = [];
  List<Habit> get habits => _habits;

  List<HabitLog> _todayLogs = [];
  List<HabitLog> get todayLogs => _todayLogs;

  String get _todayString => DateFormat('yyyy-MM-dd').format(DateTime.now());

  void _loadData() {
    _isLoading = true;
    notifyListeners();

    try {
      _habits = _storageService.getHabits();
      _todayLogs = _storageService.getLogsForDate(_todayString);
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<void> addHabit(String name) async {
    final habit = Habit(
      id: DateTime.now().millisecondsSinceEpoch.toString(),
      name: name.trim(),
      createdAt: DateTime.now(),
    );
    await _storageService.saveHabit(habit);
    _loadData();
  }

  Future<void> deleteHabit(String id) async {
    await _storageService.deleteHabit(id);
    _loadData();
  }

  bool isHabitCompletedToday(String habitId) {
    return _todayLogs.any((log) => log.habitId == habitId && log.completed);
  }

  Future<void> toggleHabitCompletion(String habitId) async {
    final isCompleted = isHabitCompletedToday(habitId);
    final log = HabitLog(
      date: _todayString,
      habitId: habitId,
      completed: !isCompleted,
    );
    await _storageService.saveLog(log);
    _loadData();
  }
}
