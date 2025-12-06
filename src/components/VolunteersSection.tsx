import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const events = [
  { id: 1, date: '15 декабря', title: 'Новогодний праздник в детском доме', volunteers: 12 },
  { id: 2, date: '22 декабря', title: 'Мастер-класс по рисованию', volunteers: 8 },
  { id: 3, date: '28 декабря', title: 'Помощь в организации праздника', volunteers: 15 },
];

export default function VolunteersSection() {
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
  );
}
