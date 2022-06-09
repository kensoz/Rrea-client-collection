import { useState, useEffect } from 'react'
import PubSub from 'pubsub-js'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import { GitHub, Language } from '@mui/icons-material'

export default function Header(): JSX.Element {
  // GitHub URL
  const url: string = 'https://github.com/kensoz/Rrea-client-collection/tree/master/c2-react18-ts-mui'

  // React Hooks
  const [isOnline, changeIsOnline] = useState<boolean>()

  useEffect((): (() => void) => {
    PubSub.subscribe('network', (_, data: boolean): void => {
      changeIsOnline(data)
    })

    return (): void => {
      PubSub.unsubscribe('network')
    }
  })

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" sx={{ boxShadow: 0, my: 1 }}>
        <Toolbar variant="dense">
          <Box sx={{ display: 'flex', flexGrow: 1 }}>
            <img src="/logo.png" alt="logo" width={135} />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
            <Language color={isOnline ? 'success' : 'error'} sx={{ mr: 2 }} />

            <Button variant="outlined" startIcon={<GitHub />} href={url}>
              GitHub
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
