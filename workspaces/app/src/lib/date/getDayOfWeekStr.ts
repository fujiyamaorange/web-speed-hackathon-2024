

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'] as const;

export const getDayOfWeekStr = (date: Date) => {
  if (!(date instanceof Date)) {
    throw new Error('Input must be a Date object');
  }

  const dayOfWeek = date.getDay(); // DateオブジェクトのgetDayメソッドで曜日のインデックスを取得
  const dayStr = days[dayOfWeek]; // 配列から対応する曜日の名前を取得
  if (dayStr == null) {
    throw new Error('dayOfWeek is invalid');
  }
  return dayStr;
};
