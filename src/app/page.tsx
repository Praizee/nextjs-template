import { twMerge } from 'tailwind-merge';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 data-testId="headline" className={twMerge('text-3xl font-bold underline', 'font-mono text-blue-500')}>
                Hello world!
            </h1>
        </main>
    );
}
