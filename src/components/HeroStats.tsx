import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function HeroStats() {
  return (
    <>
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/fcf7e820-c869-4999-8dba-78c3aed8f0c2/files/cf2cdc69-8b92-4b7b-bc3e-3e72a908722b.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Дарим радость детям
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Помогаем детям с проблемами здоровья и в трудной жизненной ситуации обрести надежду и счастье
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                <Icon name="Heart" size={20} className="mr-2" />
                Сделать пожертвование
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6">
                <Icon name="Users" size={20} className="mr-2" />
                Стать волонтёром
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: 'Users', number: '2500+', label: 'Детей помогли' },
              { icon: 'Heart', number: '350+', label: 'Волонтёров' },
              { icon: 'Calendar', number: '120+', label: 'Мероприятий в год' },
              { icon: 'Award', number: '8 лет', label: 'Работы' }
            ].map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="pt-8 pb-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <Icon name={stat.icon as any} size={32} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="text-4xl font-bold text-primary mb-2">{stat.number}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
