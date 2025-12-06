import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="Heart" className="text-primary" size={32} />
          <span className="text-2xl font-bold text-primary">Праздник детства</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="hover:text-primary transition-colors">О движении</a>
          <a href="#help" className="hover:text-primary transition-colors">Как помочь</a>
          <a href="#volunteers" className="hover:text-primary transition-colors">Волонтёры</a>
          <a href="#stories" className="hover:text-primary transition-colors">Истории</a>
          <a href="#news" className="hover:text-primary transition-colors">Новости</a>
          <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Icon name="HeartHandshake" size={18} className="mr-2" />
          Помочь
        </Button>
      </nav>
    </header>
  );
}
