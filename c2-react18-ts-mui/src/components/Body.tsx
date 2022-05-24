import { useState, useEffect } from 'react'
import PubSub from 'pubsub-js'
import useHooks from '../hook'
import type { IUserSchema } from '../types'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

export default function Body(): JSX.Element {
  // Custom Hooks
  const { bgColorCreator } = useHooks()

  // React Hooks
  const [data, setData] = useState<IUserSchema[]>([])

  useEffect((): (() => void) => {
    PubSub.subscribe('data', (_, data: IUserSchema[]): void => {
      setData(data)
    })

    return (): void => {
      PubSub.unsubscribe('data')
    }
  })

  // 指定されているユーザーがいない場合
  if (data.length === 0) {
    return (
      <Box sx={{ my: 3 }}>
        <Typography variant="h6" component="div" sx={{ textAlign: 'center' }}>
          指定されているユーザーがありません
        </Typography>
      </Box>
    )
  }

  // 普段の表示
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(3, 1fr)' },
        columnGap: 1,
        rowGap: 1,
        typography: 'body2',
        my: 2,
        mx: { xs: 0, lg: 3 }
      }}>
      {data.map((i) => (
        <Card style={bgColorCreator(Number(i.areaCode))} sx={{ boxShadow: 0, display: 'flex' }} key={i.id}>
          {/* 写真 */}
          <CardContent sx={{ width: '40%' }}>
            <CardMedia component="img" image="/image.png" alt="avatar" sx={{ mt: 1 }} />
          </CardContent>

          {/* 情報 */}
          <CardContent>
            <Typography variant="h6">ID：{i.id}</Typography>
            <Typography sx={{ fontWeight: 'bold' }}>
              氏名：{i.name} ({i.nameSpell})
            </Typography>
            <Typography>職務：{i.job}</Typography>
            <Typography>スキル：{i.skill}</Typography>
            <Typography>種族：{i.race}</Typography>
            <Typography>
              利用時間：
              {i.YYYYMMDD}--{i.HHMMss.substring(0, 5)}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  )
}
