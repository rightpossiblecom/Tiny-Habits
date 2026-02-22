import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'settings_view_model.dart';

class SettingsScreen extends StatelessWidget {
  const SettingsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final colorScheme = theme.colorScheme;

    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'Settings',
          style: TextStyle(fontWeight: FontWeight.w600),
        ),
      ),
      body: Consumer<SettingsViewModel>(
        builder: (context, viewModel, child) {
          return ListView(
            padding: const EdgeInsets.symmetric(vertical: 8),
            children: [
              _buildSectionHeader(context, 'DISPLAY'),
              SwitchListTile(
                title: const Text('Dark Mode'),
                subtitle: const Text('Toggle light and dark theme'),
                secondary: const Icon(Icons.dark_mode_outlined),
                value: viewModel.themeMode == ThemeMode.dark,
                onChanged: (value) => viewModel.toggleTheme(),
              ),
              const Divider(),
              _buildSectionHeader(context, 'DATA'),
              ListTile(
                title: const Text('Clear All Data'),
                subtitle: const Text(
                  'Permanently delete all habits and history',
                ),
                leading: Icon(
                  Icons.delete_forever_outlined,
                  color: colorScheme.error,
                ),
                onTap: () => _showClearDataDialog(context, viewModel),
              ),
              const Divider(),
              _buildSectionHeader(context, 'ABOUT & LEGAL'),
              ListTile(
                title: const Text('Privacy Policy'),
                leading: const Icon(Icons.privacy_tip_outlined),
                onTap: () {
                  // In a real app, this would launch a URL
                  _showMockWebPage(
                    context,
                    'Privacy Policy',
                    'We do not collect any personal data. All data is stored locally on your device.',
                  );
                },
              ),
              ListTile(
                title: const Text('Terms of Service'),
                leading: const Icon(Icons.description_outlined),
                onTap: () {
                  _showMockWebPage(
                    context,
                    'Terms of Service',
                    'Standard terms of service apply.',
                  );
                },
              ),
              ListTile(
                title: const Text('Rate App / Feedback'),
                leading: const Icon(Icons.star_rate_outlined),
                onTap: () {
                  ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(
                      content: Text('Thank you! Redirecting to App Store...'),
                    ),
                  );
                },
              ),
              const Divider(),
              const Padding(
                padding: EdgeInsets.all(16.0),
                child: Center(
                  child: Text(
                    'Tiny Habits v1.0.0',
                    style: TextStyle(color: Colors.grey),
                  ),
                ),
              ),
            ],
          );
        },
      ),
    );
  }

  Widget _buildSectionHeader(BuildContext context, String title) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(16, 16, 16, 8),
      child: Text(
        title,
        style: Theme.of(context).textTheme.titleSmall?.copyWith(
          color: Theme.of(context).colorScheme.primary,
          fontWeight: FontWeight.bold,
        ),
      ),
    );
  }

  void _showClearDataDialog(BuildContext context, SettingsViewModel viewModel) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Clear All Data?'),
        content: const Text(
          'This will delete all your habits and history. This action cannot be undone.',
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('Cancel'),
          ),
          FilledButton(
            style: FilledButton.styleFrom(
              backgroundColor: Theme.of(context).colorScheme.error,
              foregroundColor: Theme.of(context).colorScheme.onError,
            ),
            onPressed: () {
              viewModel.clearAllHistory();
              Navigator.pop(context);
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(content: Text('All data cleared successfully.')),
              );
            },
            child: const Text('Delete All'),
          ),
        ],
      ),
    );
  }

  void _showMockWebPage(BuildContext context, String title, String content) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: Text(title),
        content: Text(content),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('Close'),
          ),
        ],
      ),
    );
  }
}
