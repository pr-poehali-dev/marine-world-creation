import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все', icon: 'Waves' },
    { id: 'fish', name: 'Рыбы', icon: 'Fish' },
    { id: 'mammals', name: 'Млекопитающие', icon: 'Whale' },
    { id: 'mollusks', name: 'Моллюски', icon: 'Shell' },
  ];

  const creatures = [
    {
      id: 1,
      name: 'Голубой кит',
      category: 'mammals',
      depth: '0-200м',
      size: '25-30м',
      description: 'Самое большое животное на планете',
      icon: '🐋',
    },
    {
      id: 2,
      name: 'Белая акула',
      category: 'fish',
      depth: '0-1200м',
      size: '4-6м',
      description: 'Один из крупнейших хищников океана',
      icon: '🦈',
    },
    {
      id: 3,
      name: 'Осьминог',
      category: 'mollusks',
      depth: '0-1500м',
      size: '30-90см',
      description: 'Самые умные беспозвоночные',
      icon: '🐙',
    },
    {
      id: 4,
      name: 'Рыба-клоун',
      category: 'fish',
      depth: '3-15м',
      size: '8-11см',
      description: 'Яркие обитатели коралловых рифов',
      icon: '🐠',
    },
    {
      id: 5,
      name: 'Дельфин',
      category: 'mammals',
      depth: '0-300м',
      size: '2-4м',
      description: 'Дружелюбные и умные морские млекопитающие',
      icon: '🐬',
    },
    {
      id: 6,
      name: 'Гигантский кальмар',
      category: 'mollusks',
      depth: '300-1000м',
      size: '10-13м',
      description: 'Легендарные обитатели глубин',
      icon: '🦑',
    },
  ];

  const facts = [
    {
      id: 1,
      title: 'Глубина океана',
      fact: 'Марианская впадина — самая глубокая точка океана',
      detail: 'Глубина 10 994 метра',
      icon: 'TrendingDown',
    },
    {
      id: 2,
      title: 'Биолюминесценция',
      fact: '80% морских обитателей светятся в темноте',
      detail: 'Они используют свет для охоты и защиты',
      icon: 'Sparkles',
    },
    {
      id: 3,
      title: 'Давление воды',
      fact: 'На глубине 1000м давление в 100 раз больше',
      detail: 'Специальные адаптации позволяют рыбам выживать',
      icon: 'Droplets',
    },
    {
      id: 4,
      title: 'Коралловые рифы',
      fact: 'Самая большая живая структура на Земле',
      detail: 'Большой Барьерный риф виден из космоса',
      icon: 'TreePine',
    },
  ];

  const filteredCreatures =
    selectedCategory === 'all'
      ? creatures
      : creatures.filter((c) => c.category === selectedCategory);

  return (
    <div className="min-h-screen ocean-gradient font-['Open_Sans']">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bubble absolute top-20 left-10 w-4 h-4 rounded-full bg-primary/30"></div>
        <div className="bubble absolute top-40 left-1/4 w-6 h-6 rounded-full bg-secondary/20" style={{ animationDelay: '1s' }}></div>
        <div className="bubble absolute top-60 right-1/3 w-3 h-3 rounded-full bg-primary/40" style={{ animationDelay: '2s' }}></div>
        <div className="bubble absolute top-80 right-1/4 w-5 h-5 rounded-full bg-secondary/30" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <header className="relative z-10 container mx-auto px-4 py-8">
        <nav className="flex items-center justify-between backdrop-blur-sm bg-card/20 rounded-xl p-4 border border-border/50">
          <div className="flex items-center gap-2">
            <Icon name="Waves" className="text-primary" size={32} />
            <h1 className="text-2xl font-bold font-['Montserrat'] text-gradient">Морской Мир</h1>
          </div>
          <div className="flex gap-6">
            <a href="#home" className="text-foreground/80 hover:text-primary transition-colors">Главная</a>
            <a href="#creatures" className="text-foreground/80 hover:text-primary transition-colors">Обитатели</a>
            <a href="#gallery" className="text-foreground/80 hover:text-primary transition-colors">Галерея</a>
            <a href="#facts" className="text-foreground/80 hover:text-primary transition-colors">Факты</a>
          </div>
        </nav>
      </header>

      <section id="home" className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="animate-float">
          <h2 className="text-6xl font-bold font-['Montserrat'] mb-6 text-gradient">
            Погрузись в океан
          </h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Исследуй таинственный подводный мир, полный удивительных существ и невероятных фактов
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Icon name="Anchor" className="mr-2" size={20} />
            Начать погружение
          </Button>
        </div>
      </section>

      <section id="creatures" className="relative z-10 container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold font-['Montserrat'] mb-8 text-center text-gradient">
          Обитатели глубин
        </h2>
        
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={selectedCategory === cat.id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(cat.id)}
              className={`${
                selectedCategory === cat.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card/50 backdrop-blur-sm border-border text-foreground hover:bg-card/70'
              }`}
            >
              <Icon name={cat.icon as any} className="mr-2" size={18} />
              {cat.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCreatures.map((creature) => (
            <Card
              key={creature.id}
              className="group bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 overflow-hidden"
            >
              <div className="p-6">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {creature.icon}
                </div>
                <h3 className="text-2xl font-bold font-['Montserrat'] mb-2 text-foreground group-hover:text-primary transition-colors">
                  {creature.name}
                </h3>
                <p className="text-muted-foreground mb-4">{creature.description}</p>
                <div className="flex gap-2 mb-4">
                  <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                    <Icon name="Gauge" className="mr-1" size={14} />
                    {creature.depth}
                  </Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    <Icon name="Ruler" className="mr-1" size={14} />
                    {creature.size}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section id="gallery" className="relative z-10 container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold font-['Montserrat'] mb-8 text-center text-gradient">
          Галерея
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'https://cdn.poehali.dev/projects/c2aba2eb-8dee-45e5-ba51-3fea031ffa7e/files/d5a9918b-e4cf-4381-880d-28b945efe1ef.jpg',
            'https://cdn.poehali.dev/projects/c2aba2eb-8dee-45e5-ba51-3fea031ffa7e/files/7d931ad9-63d1-4f8e-a7c2-5c053718a2cf.jpg',
            'https://cdn.poehali.dev/projects/c2aba2eb-8dee-45e5-ba51-3fea031ffa7e/files/406dab38-fe63-4fb6-86db-6e888304d252.jpg',
            'https://cdn.poehali.dev/projects/c2aba2eb-8dee-45e5-ba51-3fea031ffa7e/files/67df4144-da87-4b97-b0f6-5fd869b770e9.jpg',
            'https://cdn.poehali.dev/projects/c2aba2eb-8dee-45e5-ba51-3fea031ffa7e/files/a2ee8914-7d09-4559-b93c-17512e0e9442.jpg',
            'https://cdn.poehali.dev/projects/c2aba2eb-8dee-45e5-ba51-3fea031ffa7e/files/14d879f0-46cf-428f-9a20-e353241f8b01.jpg',
            'https://cdn.poehali.dev/projects/c2aba2eb-8dee-45e5-ba51-3fea031ffa7e/files/7fb2e15a-ca01-4562-b91c-c0078a8f0128.jpg',
            'https://cdn.poehali.dev/projects/c2aba2eb-8dee-45e5-ba51-3fea031ffa7e/files/9c7ea996-cf2a-4781-a9c1-06a1330349af.jpg',
          ].map((img, i) => (
            <div
              key={i}
              className="aspect-square rounded-xl overflow-hidden backdrop-blur-sm border border-border hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 group"
            >
              <img 
                src={img} 
                alt={`Морская жизнь ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      <section id="facts" className="relative z-10 container mx-auto px-4 py-20 pb-32">
        <h2 className="text-4xl font-bold font-['Montserrat'] mb-8 text-center text-gradient">
          Удивительные факты
        </h2>
        <TooltipProvider>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facts.map((fact) => (
              <Tooltip key={fact.id}>
                <TooltipTrigger asChild>
                  <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 cursor-help p-6">
                    <Icon name={fact.icon as any} className="text-primary mb-4" size={40} />
                    <h3 className="text-xl font-bold font-['Montserrat'] mb-2 text-foreground">
                      {fact.title}
                    </h3>
                    <p className="text-muted-foreground">{fact.fact}</p>
                  </Card>
                </TooltipTrigger>
                <TooltipContent className="bg-card border-primary text-foreground">
                  <p className="font-semibold">{fact.detail}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </section>

      <footer className="relative z-10 border-t border-border/50 backdrop-blur-sm bg-card/20">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Морской Мир. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;