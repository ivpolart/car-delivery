import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function Home() {
    return (
    <>
        <Container>
            <h1>Home</h1>
            <div className="bg-red-500 text-white text-3xl p-10">
                Tailwind working
            </div>
            <Button variant="primary" onClick={() => alert('Primary button clicked!')}>
                Click me
            </Button>
            <Button variant="secondary" onClick={() => alert('Secondary button clicked!')}>
                Click me
            </Button>
        </Container>
    </>
    )
    ;
}