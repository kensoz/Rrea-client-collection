import { useState, useEffect } from 'react'
import PubSub from 'pubsub-js'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { GitHub, Language } from '@mui/icons-material'

export default function Header(): JSX.Element {
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
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            RreaC
            <span style={{ color: '#1976D2' }}>2</span>
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
            <Language color={isOnline ? 'success' : 'error'} sx={{ mr: 2 }} />

            <Button variant="outlined" startIcon={<GitHub />} href="">
              GitHub
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
