
import { Hand, Home, PanelTopClose,  } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './dropdown-menu'
import { Button } from './button'
import { useNavigate } from 'react-router-dom'

const InterfaceDropdown = () => {
    const navigate = useNavigate();

    return (
        <div className='fixed bottom-0 right-0 p-4'>
        <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className='p-0 rounded-full text-muted-foreground'>
                        <Hand size={20}/>
                    </Button>
                </DropdownMenuTrigger>
                    
            <DropdownMenuContent>
                <DropdownMenuLabel onClick={() => navigate('/home')} className='flex gap-2 text-muted-foreground'><Home size={20}/> Home</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuLabel onClick={() => navigate('/dashboard')} className='flex gap-2 text-muted-foreground'><PanelTopClose size={20}/> Dashboard</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuLabel onClick={() => navigate('/soccer')} className='flex gap-2 text-muted-foreground'><PanelTopClose size={20}/> Soccer</DropdownMenuLabel>
                </DropdownMenuGroup>
            </DropdownMenuContent>
            </DropdownMenu>
            </div>
    )
}

export default InterfaceDropdown
