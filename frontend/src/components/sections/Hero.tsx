import Container from "@/components/ui/Container";
import Button from "../ui/Button";

export default function Hero() {
    return (
        <section className="hero bg-[url('@/assets/bg-01.jpg')] bg-cover bg-position-[top_70%_center] min-h-[800px] pt-24 pb-24 relative before:content-[''] before:bg-linear-to-r before:from-orange-500 before:to-orange-500/0 before:absolute before:top-0 before:left-0 before:w-4/5 before:h-full">
            <Container className="relative">
                <div className="post-block lg:w-1/2">
                    <h1 className="mb-7">Drive your dream&nbsp;today!</h1>
                    <p className="lg:text-[20px] mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ullam temporibus, eligendi suscipit debitis hic provident sunt quaerat mollitia dolores nobis dolorum animi. Recusandae at vitae provident ratione autem aliquid.</p>
                </div>
                <Button variant="secondary">Calculate</Button>
            </Container>
        </section>
    )
}