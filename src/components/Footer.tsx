import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary to-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Icon name="Heart" size={32} />
            <div>
              <p className="text-2xl font-bold">Праздник детства</p>
              <p className="text-white/80">Дарим радость детям</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Icon name="Instagram" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Icon name="Facebook" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Icon name="Youtube" size={24} />
            </Button>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-white/20">
          <p className="text-white/80">© 2024 Праздник детства. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
