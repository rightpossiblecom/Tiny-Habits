import 'package:hive_flutter/hive_flutter.dart';
import '../models/habit.dart';
import '../models/habit_log.dart';

class StorageService {
  static const String _habitsBoxName = 'habits';
  static const String _logsBoxName = 'habit_logs';
  static const String _settingsBoxName = 'settings';

  late Box<String> _habitsBox;
  late Box<String> _logsBox;
  late Box<String> _settingsBox;

  Future<void> init() async {
    await Hive.initFlutter();
    _habitsBox = await Hive.openBox<String>(_habitsBoxName);
    _logsBox = await Hive.openBox<String>(_logsBoxName);
    _settingsBox = await Hive.openBox<String>(_settingsBoxName);
  }

  // Habits
  List<Habit> getHabits() {
    return _habitsBox.values.map((json) => Habit.fromJson(json)).toList()
      ..sort((a, b) => a.createdAt.compareTo(b.createdAt));
  }

  Future<void> saveHabit(Habit habit) async {
    await _habitsBox.put(habit.id, habit.toJson());
  }

  Future<void> deleteHabit(String id) async {
    await _habitsBox.delete(id);
    // Also delete associated logs
    final logsToDelete = _logsBox.keys.where((key) {
      final log = HabitLog.fromJson(_logsBox.get(key)!);
      return log.habitId == id;
    }).toList();
    await _logsBox.deleteAll(logsToDelete);
  }

  // Logs
  List<HabitLog> getLogsForDate(String date) {
    return _logsBox.values
        .map((json) => HabitLog.fromJson(json))
        .where((log) => log.date == date)
        .toList();
  }

  List<HabitLog> getAllLogs() {
    return _logsBox.values.map((json) => HabitLog.fromJson(json)).toList();
  }

  Future<void> saveLog(HabitLog log) async {
    final key = '${log.date}_${log.habitId}';
    if (log.completed) {
      await _logsBox.put(key, log.toJson());
    } else {
      await _logsBox.delete(key);
    }
  }

  // Settings
  bool get isDarkMode {
    final raw = _settingsBox.get('isDarkMode');
    return raw == 'true';
  }

  Future<void> setDarkMode(bool isDark) async {
    await _settingsBox.put('isDarkMode', isDark.toString());
  }

  Future<void> clearAllData() async {
    await _habitsBox.clear();
    await _logsBox.clear();
    await _settingsBox.clear();
  }
}
