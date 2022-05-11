// ##############################
// *
// * common hooks
// *
// ##############################

export default function useColor(e: number): string {
  // 背景色作成
  // デフォルト、本社、支社、食堂、外勤、その他
  const list: string[] = [
    'hsl(0, 0%, 71%)',
    'hsl(219, 70%, 96%)',
    'hsl(142, 52%, 96%)',
    'hsl(347, 90%, 96%)',
    'hsl(219, 70%, 96%)',
    'hsl(0, 0%, 96%)',
  ]
  return list[e]
}
