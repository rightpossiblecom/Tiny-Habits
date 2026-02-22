import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'core/services/storage_service.dart';
import 'core/theme/app_theme.dart';
import 'main_wrapper.dart';
import 'features/settings/settings_view_model.dart';
import 'features/home/home_view_model.dart';
import 'features/history/history_view_model.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  final storageService = StorageService();
  await storageService.init();

  runApp(
    MultiProvider(
      providers: [
        Provider<StorageService>.value(value: storageService),
        ChangeNotifierProvider(
          create: (context) => SettingsViewModel(storageService),
        ),
        ChangeNotifierProvider(
          create: (context) => HomeViewModel(storageService),
        ),
        ChangeNotifierProvider(
          create: (context) => HistoryViewModel(storageService),
        ),
      ],
      child: const MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return Consumer<SettingsViewModel>(
      builder: (context, settingsViewModel, _) {
        return MaterialApp(
          title: 'Tiny Habits',
          debugShowCheckedModeBanner: false,
          theme: AppTheme.lightTheme,
          darkTheme: AppTheme.darkTheme,
          themeMode: settingsViewModel.themeMode,
          home: const MainWrapper(),
        );
      },
    );
  }
}
