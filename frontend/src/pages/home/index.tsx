import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"


const Home = () => {
    return (
        <div className="flex flex-col items-center gap-8 w-full px-4 m-auto">
        <Card className="w-full max-w-sm m-auto">
            <CardContent className="flex flex-col gap-3">
                { [{id: 1, name: "Sumô"}, {id: 2, name: "Futebol de Robôs"}, {id: 3, name: "Seguidor de Linha"}].map((category) => (
                    <Button key={category.id} className="w-full bg-yellow-400 hover:bg-amber-400 py-6 text-lg">{category.name}</Button>
                ))}
            </CardContent>
            </Card>
        </div>
       
        
    )
}

export default Home
