import 'dart:convert';

class HabitLog {
  final String date; // Format: YYYY-MM-DD
  final String habitId;
  final bool completed;

  HabitLog({
    required this.date,
    required this.habitId,
    required this.completed,
  });

  Map<String, dynamic> toMap() {
    return {'date': date, 'habitId': habitId, 'completed': completed};
  }

  factory HabitLog.fromMap(Map<String, dynamic> map) {
    return HabitLog(
      date: map['date'] ?? '',
      habitId: map['habitId'] ?? '',
      completed: map['completed'] ?? false,
    );
  }

  String toJson() => json.encode(toMap());

  factory HabitLog.fromJson(String source) =>
      HabitLog.fromMap(json.decode(source));
}
