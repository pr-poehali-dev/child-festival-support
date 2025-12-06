import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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

export default function StoriesNewsContact() {
  return (
    <>
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
    </>
  );
}
