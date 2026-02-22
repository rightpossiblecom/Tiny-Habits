import 'package:flutter/material.dart';
import '../../core/services/storage_service.dart';

class SettingsViewModel extends ChangeNotifier {
  final StorageService _storageService;

  SettingsViewModel(this._storageService) {
    _loadSettings();
  }

  ThemeMode _themeMode = ThemeMode.system;
  ThemeMode get themeMode => _themeMode;

  void _loadSettings() {
    final isDark = _storageService.isDarkMode;
    _themeMode = isDark ? ThemeMode.dark : ThemeMode.light;
    notifyListeners();
  }

  Future<void> toggleTheme() async {
    final isDark = _themeMode == ThemeMode.dark;
    await _storageService.setDarkMode(!isDark);
    _themeMode = !isDark ? ThemeMode.dark : ThemeMode.light;
    notifyListeners();
  }

  Future<void> clearAllHistory() async {
    await _storageService.clearAllData();
    notifyListeners();
  }
}
