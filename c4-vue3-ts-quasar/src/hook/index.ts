// ##############################
// *
// * common hooks
// *
// ##############################

export default function useHooks() {
  // 背景色作成
  const bgColorCreator = (e: number): string => {
    // デフォルト、本社、支社、食堂、外勤、その他
    const list: string[] = ['brown-1', 'light-blue-1', 'green-1', 'pink-2', 'amber-1', 'blue-grey-1']
    return list[e]
  }

  return {
    bgColorCreator,
  }
}
