import { IdCard, Key } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Field, FieldLabel } from "../../components/ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput } from "../../components/ui/input-group"

const Login = () => {
    return (
        <div className="flex flex-col items-center gap-8 w-full px-4 m-auto">
            
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Acesse o Sistema</CardTitle>
                    <CardDescription>II Torneio e Mostra Tecnológica de Robótica - IFES Campus Serra</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                    <Field className="flex flex-col gap-1">
                        <FieldLabel>CPF</FieldLabel>
                        <InputGroup>
                            <InputGroupAddon><IdCard /></InputGroupAddon>
                            <InputGroupInput placeholder="000.000.000-00" type="tel" />
                        </InputGroup>
                    </Field>

                    <Field className="flex flex-col gap-1">
                        <FieldLabel>Senha</FieldLabel>
                        <InputGroup>
                            <InputGroupInput placeholder="Digite sua senha" type="password"  />
                            <InputGroupAddon><Key /></InputGroupAddon>
                        </InputGroup>
                    </Field>

                    <Button className="w-full mt-5 bg-yellow-400 hover:bg-amber-400 text-yellow-950 font-semibold" >
                        Entrar
                    </Button>
                </CardContent>
            </Card>

            <footer className="text-sm text-white/80 font-medium tracking-wide text-center">
                © 2026 TMTR - IFES Campus Serra
            </footer>
            
        </div>
    )
}

export default Login