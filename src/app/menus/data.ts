export type Menu = {
  id: number;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
  cartID?: any;
};

export const MenuDB = {
  _menu: [
    {
      id: 1670746685296,
      name: "카페라떼",
      price: 4000,
      category: "에스프레소",
      imageUrl: "https://source.unsplash.com/random",
    },
    {
      id: 1670746704981,
      name: "아메리카노",
      price: 6000,
      category: "에스프레소",
      imageUrl: "https://source.unsplash.com/random",
    },
    {
      id: 1670746710456,
      name: "바닐라라떼",
      price: 4500,
      category: "에스프레소",
      imageUrl: "https://source.unsplash.com/random",
    },
    {
      id: 1670746716153,
      name: "카페모카",
      price: 4500,
      category: "에스프레소",
      imageUrl: "https://source.unsplash.com/random",
    },
    {
      id: 1670746723447,
      name: "아이스티",
      price: 3000,
      category: "티/에이드",
      imageUrl: "https://source.unsplash.com/random",
    },
    {
      id: 1670746771154,
      name: "자몽에이드",
      price: 3000,
      category: "티/에이드",
      imageUrl: "https://source.unsplash.com/random",
    },
    {
      id: 1670746781097,
      name: "레몬에이드",
      price: 3000,
      category: "티/에이드",
      imageUrl: "https://source.unsplash.com/random",
    },
    {
      id: 1670746787479,
      name: "얼그레이티",
      price: 3500,
      category: "티/에이드",
      imageUrl: "https://source.unsplash.com/random",
    },
    {
      id: 1670746791367,
      name: "페퍼민트티",
      price: 3500,
      category: "티/에이드",
      imageUrl: "https://source.unsplash.com/random",
    },
    {
      id: 1670746795845,
      name: "마카롱",
      price: 3500,
      category: "디저트",
      imageUrl: "https://source.unsplash.com/random",
    },
    {
      id: 20,
      name: "치즈케이크",
      price: 5000,
      category: "디저트",
      imageUrl: "https://source.unsplash.com/random",
    },
  ],
  select: function (): Menu[] {
    return [...MenuDB._menu];
  },
  selectById: function (id: number): Menu {
    /* TODO */
  },
  add: function (menu: Omit<Menu, "id">): void {
    /* TODO id는 Date.now() 로 만들어주세요 */
    const newProduct = {
      id: Date.now(),
      ...menu,
    };
    MenuDB._menu.push(newProduct);
  },
  update: function (menu: Menu): void {
    /* TODO */
    // undefined는 _menu에 data가 없는게 아니라 개발자가 callback 함수를 작성 하기때문에 오류가 날수 있다 그래서 방어코드인 if(!targetMenue) return; 해준다

    const targetMenue = MenuDB.select().find((_menu) => _menu.id === menu.id);
    if (!targetMenue) return;
    targetMenue.name = menu.name;
    targetMenue.price = menu.price;
    targetMenue.category = menu.category;
    targetMenue.imageUrl = menu.imageUrl;
  },
  delete: function (id: number): void {
    MenuDB._menu = MenuDB.select().filter((menu) => menu.id !== id);
  },
};

// 소파 하위에 cateory
