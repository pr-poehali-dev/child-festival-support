import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function AboutHelp() {
  return (
    <>
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">О движении</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground">
                Мы создаём праздник для тех, кому это особенно нужно
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-secondary/10 rounded-lg">
                      <Icon name="Target" className="text-secondary" size={24} />
                    </div>
                    <CardTitle>Наша миссия</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Создавать возможности для счастливого детства каждому ребёнку, независимо от его жизненной ситуации или состояния здоровья.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon name="Sparkles" className="text-primary" size={24} />
                    </div>
                    <CardTitle>Наши ценности</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Доброта, искренность, профессионализм и вера в то, что каждый ребёнок заслуживает радости и заботы.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="help" className="py-20 bg-gradient-to-b from-secondary/5 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Как помочь</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground">
              Каждый вклад имеет значение
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: 'Coins',
                title: 'Разовое пожертвование',
                description: 'Любая сумма поможет нам организовать праздники и оказать помощь детям',
                action: 'Пожертвовать'
              },
              {
                icon: 'CalendarHeart',
                title: 'Регулярная поддержка',
                description: 'Ежемесячные пожертвования позволяют планировать долгосрочные программы',
                action: 'Подписаться'
              },
              {
                icon: 'HandHeart',
                title: 'Стать волонтёром',
                description: 'Подарите своё время и энергию - это бесценно для наших подопечных',
                action: 'Присоединиться'
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="pt-8">
                  <div className="flex justify-center mb-6">
                    <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl group-hover:scale-110 transition-transform">
                      <Icon name={item.icon as any} size={40} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center">{item.title}</h3>
                  <p className="text-muted-foreground mb-6 text-center leading-relaxed">
                    {item.description}
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    {item.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
