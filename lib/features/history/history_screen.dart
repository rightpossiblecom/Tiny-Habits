import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:intl/intl.dart';
import 'history_view_model.dart';
import '../../core/models/habit.dart';

class HistoryScreen extends StatefulWidget {
  const HistoryScreen({super.key});

  @override
  State<HistoryScreen> createState() => _HistoryScreenState();
}

class _HistoryScreenState extends State<HistoryScreen> {
  @override
  void initState() {
    super.initState();
    // Refresh data when screen is accessed
    WidgetsBinding.instance.addPostFrameCallback((_) {
      context.read<HistoryViewModel>().refresh();
    });
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final colorScheme = theme.colorScheme;

    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'Weekly History',
          style: TextStyle(fontWeight: FontWeight.w600),
        ),
      ),
      body: Consumer<HistoryViewModel>(
        builder: (context, viewModel, child) {
          if (viewModel.isLoading) {
            return const Center(child: CircularProgressIndicator());
          }
          return _buildContent(context, viewModel, colorScheme);
        },
      ),
    );
  }

  Widget _buildContent(
    BuildContext context,
    HistoryViewModel viewModel,
    ColorScheme colorScheme,
  ) {
    final habits = viewModel.habits;
    final days = viewModel.last7Days;

    if (habits.isEmpty) {
      return Center(
        child: Text(
          'No habits to track yet.',
          style: TextStyle(color: colorScheme.onSurface.withOpacity(0.5)),
        ),
      );
    }

    return SingleChildScrollView(
      scrollDirection: Axis.horizontal,
      child: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(24.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Header Row (Dates)
              Row(
                children: [
                  const SizedBox(width: 120), // Spacer for habit names
                  ...days.map(
                    (date) => SizedBox(
                      width: 48,
                      child: Column(
                        children: [
                          Text(
                            DateFormat('E').format(date).substring(0, 3),
                            style: TextStyle(
                              fontSize: 12,
                              fontWeight: FontWeight.bold,
                              color: colorScheme.onSurface.withOpacity(0.6),
                            ),
                          ),
                          const SizedBox(height: 4),
                          Text(
                            DateFormat('d').format(date),
                            style: TextStyle(
                              fontSize: 14,
                              color: colorScheme.onSurface,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 16),
              // Grid Rows (Habits)
              ...habits.map(
                (habit) => _buildHabitRow(habit, days, viewModel, colorScheme),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildHabitRow(
    Habit habit,
    List<DateTime> days,
    HistoryViewModel viewModel,
    ColorScheme colorScheme,
  ) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 16.0),
      child: Row(
        children: [
          SizedBox(
            width: 120,
            child: Text(
              habit.name,
              style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w500),
              maxLines: 1,
              overflow: TextOverflow.ellipsis,
            ),
          ),
          ...days.map((date) {
            final isCompleted = viewModel.isHabitCompletedOnDate(
              habit.id,
              date,
            );
            return SizedBox(
              width: 48,
              child: Center(
                child: Container(
                  width: 32,
                  height: 32,
                  decoration: BoxDecoration(
                    color: isCompleted
                        ? colorScheme.primary
                        : colorScheme.surfaceContainerHighest.withOpacity(0.5),
                    borderRadius: BorderRadius.circular(8),
                  ),
                  child: isCompleted
                      ? Icon(
                          Icons.check,
                          size: 20,
                          color: colorScheme.onPrimary,
                        )
                      : null,
                ),
              ),
            );
          }),
        ],
      ),
    );
  }
}
