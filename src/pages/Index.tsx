import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const events = [
  { id: 1, date: '15 декабря', title: 'Новогодний праздник в детском доме', volunteers: 12 },
  { id: 2, date: '22 декабря', title: 'Мастер-класс по рисованию', volunteers: 8 },
  { id: 3, date: '28 декабря', title: 'Помощь в организации праздника', volunteers: 15 },
];

const stories = [
  {
    id: 1,
    name: 'Маша',
    age: 8,
    story: 'Благодаря вашей помощи Маша смогла пройти курс реабилитации. Сейчас она мечтает стать художником!',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=400&fit=crop'
  },
  {
    id: 2,
    name: 'Артём',
    age: 10,
    story: 'Артём получил необходимое лечение и теперь активно занимается спортом.',
    image: 'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=400&h=400&fit=crop'
  },
  {
    id: 3,
    name: 'Софья',
    age: 7,
    story: 'Софья научилась читать и теперь мечтает стать учительницей.',
    image: 'https://images.unsplash.com/photo-1518295094088-e45ae8bc5e6a?w=400&h=400&fit=crop'
  }
];

const news = [
  {
    id: 1,
    date: '5 декабря 2024',
    title: 'Итоги благотворительного марафона',
    content: 'Собрано более 2 миллионов рублей на помощь детям!'
  },
  {
    id: 2,
    date: '1 декабря 2024',
    title: 'Новый центр реабилитации',
    content: 'Открыт современный центр для детей с особенными потребностями.'
  },
  {
    id: 3,
    date: '28 ноября 2024',
    title: 'Награждение волонтёров',
    content: '50 добровольцев получили благодарности за активную работу.'
  }
];

export default function Index() {
  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за регистрацию! Мы свяжемся с вами в ближайшее время.');
    setVolunteerForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen">
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

      <main className="pt-20">
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

        <section id="volunteers" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Волонтёры</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground">
                Присоединяйтесь к команде добрых сердец
              </p>
            </div>
            <div className="max-w-5xl mx-auto">
              <Tabs defaultValue="events" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="events" className="text-lg">
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Мероприятия
                  </TabsTrigger>
                  <TabsTrigger value="register" className="text-lg">
                    <Icon name="UserPlus" size={20} className="mr-2" />
                    Регистрация
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="events" className="space-y-4">
                  {events.map((event) => (
                    <Card key={event.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <Badge className="bg-primary/10 text-primary border-0">
                                <Icon name="CalendarDays" size={14} className="mr-1" />
                                {event.date}
                              </Badge>
                              <Badge variant="outline">
                                <Icon name="Users" size={14} className="mr-1" />
                                {event.volunteers} волонтёров
                              </Badge>
                            </div>
                            <CardTitle className="text-xl">{event.title}</CardTitle>
                          </div>
                          <Button>
                            <Icon name="UserPlus" size={18} className="mr-2" />
                            Участвовать
                          </Button>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </TabsContent>
                <TabsContent value="register">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl">Станьте волонтёром</CardTitle>
                      <CardDescription className="text-base">
                        Заполните форму, и мы свяжемся с вами для обсуждения возможностей участия
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name">Имя и фамилия *</Label>
                            <Input
                              id="name"
                              value={volunteerForm.name}
                              onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
                              required
                              placeholder="Иван Иванов"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={volunteerForm.email}
                              onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                              required
                              placeholder="ivan@example.com"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Телефон *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={volunteerForm.phone}
                            onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })}
                            required
                            placeholder="+7 (999) 123-45-67"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Расскажите о себе</Label>
                          <Textarea
                            id="message"
                            value={volunteerForm.message}
                            onChange={(e) => setVolunteerForm({ ...volunteerForm, message: e.target.value })}
                            placeholder="Ваш опыт, интересы, доступное время..."
                            rows={4}
                          />
                        </div>
                        <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                          <Icon name="Send" size={18} className="mr-2" />
                          Отправить заявку
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section id="stories" className="py-20 bg-gradient-to-b from-muted/20 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Истории успеха</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground">
                Каждая история — это маленькое чудо
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {stories.map((story) => (
                <Card key={story.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold">{story.name}</h3>
                      <Badge variant="outline">{story.age} лет</Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {story.story}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="news" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Новости</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground">
                Будьте в курсе наших событий
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {news.map((item) => (
                  <AccordionItem key={item.id} value={`item-${item.id}`} className="border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow">
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <div className="flex flex-col items-start gap-2">
                        <Badge variant="outline" className="mb-1">
                          <Icon name="Calendar" size={14} className="mr-1" />
                          {item.date}
                        </Badge>
                        <span className="text-xl font-semibold">{item.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base pb-6">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gradient-to-b from-secondary/5 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-slide-up">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
                <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                <p className="text-xl text-muted-foreground">
                  Мы всегда открыты для общения
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: 'Mail',
                    title: 'Email',
                    content: 'info@prazdnik-detstva.ru',
                    link: 'mailto:info@prazdnik-detstva.ru'
                  },
                  {
                    icon: 'Phone',
                    title: 'Телефон',
                    content: '+7 (495) 123-45-67',
                    link: 'tel:+74951234567'
                  },
                  {
                    icon: 'MapPin',
                    title: 'Адрес',
                    content: 'г. Москва, ул. Примерная, д. 10',
                    link: '#'
                  }
                ].map((contact, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-8">
                      <div className="flex justify-center mb-4">
                        <div className="p-4 bg-primary/10 rounded-full">
                          <Icon name={contact.icon as any} size={28} className="text-primary" />
                        </div>
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{contact.title}</h3>
                      <a 
                        href={contact.link}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {contact.content}
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

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
    </div>
  );
}
