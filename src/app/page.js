import Header from '@/components/ui/Header';
import MainContent from '@/components/MainContent';
export default function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />
            <MainContent />
        </div>
    );
}
