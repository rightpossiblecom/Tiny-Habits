import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import '../../core/models/habit.dart';
import '../../core/services/storage_service.dart';

class HistoryViewModel extends ChangeNotifier {
  final StorageService _storageService;

  HistoryViewModel(this._storageService) {
    _loadData();
  }

  bool _isLoading = false;
  bool get isLoading => _isLoading;

  List<Habit> _habits = [];
  List<Habit> get habits => _habits;

  // Map of date string (yyyy-MM-dd) to Set of completed habit IDs
  Map<String, Set<String>> _completions = {};

  // Last 7 days including today
  List<DateTime> get last7Days {
    final today = DateTime.now();
    return List.generate(7, (i) => today.subtract(Duration(days: 6 - i)));
  }

  void _loadData() {
    _isLoading = true;
    notifyListeners();

    try {
      _habits = _storageService.getHabits();

      _completions = {};
      final allLogs = _storageService.getAllLogs();
      for (final log in allLogs) {
        if (log.completed) {
          _completions.putIfAbsent(log.date, () => {}).add(log.habitId);
        }
      }
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  void refresh() {
    _loadData();
  }

  bool isHabitCompletedOnDate(String habitId, DateTime date) {
    final dateStr = DateFormat('yyyy-MM-dd').format(date);
    return _completions[dateStr]?.contains(habitId) ?? false;
  }
}
