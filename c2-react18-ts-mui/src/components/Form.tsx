import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import PubSub from 'pubsub-js'
import { GRAPHQL_FORM, GRAPHQL_DATA } from '../graphql'
import useHooks from '../hook'
import type { IFormData, IParamsName, IParams, IBodyData } from '../types'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import RefreshIcon from '@mui/icons-material/Refresh'

export default function Form(): JSX.Element {
  // ---------- Hooks ----------
  // Custom Hooks
  const { bgColorCreator } = useHooks()

  // React State Hooks
  const [params, setParams] = useState<IParams>({ areaCode: '', jobCode: [], nameCode: [], raceCode: [] })

  // GraphQL Hooks
  const form = useQuery<IFormData>(GRAPHQL_FORM)
  const data = useQuery<IBodyData, IParams>(GRAPHQL_DATA, { variables: params })
  const isOnline: boolean = !!(form.error || data.error === undefined)

  // React Effect Hooks
  useEffect((): void => {
    data.refetch(params)
  }, [params])

  useEffect((): void => {
    if (!data.loading) {
      PubSub.publish('data', data.data?.data.user)
      PubSub.publish('network', isOnline)
    }
  }, [data])

  // ---------- Functions ----------
  // フォーム制御
  const handleForm = (event: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent, key: IParamsName): void => {
    if (key === 'areaCode') {
      setParams({ ...params, [key]: event.target.value })
    } else {
      const arr: string[] = params[key]
      const pos: number = arr.indexOf(event.target.value)
      pos < 0 ? arr.push(event.target.value) : arr.splice(pos, 1)

      setParams({ ...params, [key]: arr })
    }
  }

  // リセット
  const reset = (): void => {
    setParams({ areaCode: '', jobCode: [], nameCode: [], raceCode: [] })
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mx: { xs: 0, lg: 3 },
        borderBottom: 1,
        borderColor: 'grey.400'
      }}>
      {/* 場所 */}
      <FormControl size="small" sx={{ width: { xs: '100%', lg: '60%' } }}>
        <InputLabel id="selectArea">場所選択</InputLabel>
        <Select labelId="selectArea" value={params.areaCode} onChange={(f) => handleForm(f, 'areaCode')} label="場所">
          <MenuItem value={''}>{'全部'}</MenuItem>
          {form.data?.area.map((i) => (
            <MenuItem key={i.text} value={i.value}>
              {i.text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* 氏名 */}
      <FormControl fullWidth>
        <FormGroup
          row
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}>
          <Typography variant="subtitle1" component="div" sx={{ fontWeight: 'bold' }}>
            氏名：
          </Typography>

          {form.data?.name.map((i) => (
            <FormControlLabel
              key={i.text}
              control={
                <Checkbox
                  value={i.value}
                  onChange={(e) => handleForm(e, 'nameCode')}
                  checked={params.nameCode.includes(i.value)}
                  size="small"
                />
              }
              label={i.text}
            />
          ))}
        </FormGroup>
      </FormControl>

      {/* 職務 */}
      <FormControl fullWidth>
        <FormGroup
          row
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}>
          <Typography variant="subtitle1" component="div" sx={{ fontWeight: 'bold' }}>
            職務：
          </Typography>
          {form.data?.job.map((i) => (
            <FormControlLabel
              key={i.text}
              control={
                <Checkbox
                  value={i.value}
                  onChange={(e) => handleForm(e, 'jobCode')}
                  checked={params.jobCode.includes(i.value)}
                  size="small"
                />
              }
              label={i.text}
            />
          ))}
        </FormGroup>
      </FormControl>

      {/* 種族 */}
      <FormControl fullWidth>
        <FormGroup
          row
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}>
          <Typography variant="subtitle1" component="div" sx={{ fontWeight: 'bold' }}>
            種族：
          </Typography>
          {form.data?.race.map((i) => (
            <FormControlLabel
              key={i.text}
              control={
                <Checkbox
                  value={i.value}
                  onChange={(e) => handleForm(e, 'raceCode')}
                  checked={params.raceCode.includes(i.value)}
                  size="small"
                />
              }
              label={i.text}
            />
          ))}
        </FormGroup>
      </FormControl>

      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: { xs: 'column', md: 'row' }, mb: 3 }}>
        {/* resetボタン */}
        <Button
          variant="outlined"
          onClick={reset}
          sx={{ mr: { xs: 0, md: 3 }, mb: { xs: 2, md: 0 }, width: { xs: '100%', md: 'auto' } }}
          startIcon={<RefreshIcon />}>
          reset
        </Button>

        {/* エリア情報 */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
          {data.data?.data.count.map((i) => (
            <Chip
              style={bgColorCreator(i.value)}
              key={i.value}
              label={`${i.area}：${i.count}`}
              sx={{ mx: 1, my: { xs: 1, md: 0 } }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )
}
