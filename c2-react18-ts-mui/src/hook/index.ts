// ##############################
// *
// * common hooks
// *
// ##############################

export default function useHooks() {
  // 背景色作成
  interface IColor {
    backgroundColor: string
  }

  const bgColorCreator = (e: number): IColor => {
    // 0:デフォルト、1:本社、2:支社、3:食堂、4:外勤、5:その他
    // color : https://mui.com/material-ui/customization/color/#main-content
    const list: string[] = ['#cfd8dc', '#bbdefb', '#c8e6c9', '#fff9c4', '#f8bbd0', '#f5f5f5']
    return { backgroundColor: list[e] }
  }

  return {
    bgColorCreator
  }
}
