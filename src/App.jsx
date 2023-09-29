import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Lists from "./components/Lists";
import Categories from "./components/categories";
import ProductImg1 from "./assets/chair-gray.jpg";
import ProductImg2 from "./assets/chair-white.jpg";
import ProductImg3 from "./assets/sofa.jpg";
import ProductImg4 from "./assets/table.jpg";
import ProductImg5 from "./assets/wall-light.jpg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Стул серый",
          img: ProductImg1,
          desc: "Lorem ispum dolor sit amet, consectetur adipisicing",
          category: "chairs",
          price: "49.99",
        },
        {
          id: 2,
          title: "Стол",
          img: ProductImg4,
          desc: "Lorem ispum dolor sit amet, consectetur adipisicing",
          category: "tables",
          price: "149.00",
        },
        {
          id: 3,
          title: "Диван",
          img: ProductImg3,
          desc: "Lorem ispum dolor sit amet, consectetur adipisicing",
          category: "sofa",
          price: "549.00",
        },
        {
          id: 4,
          title: "Лампа",
          img: ProductImg5,
          desc: "Lorem ispum dolor sit amet, consectetur adipisicing",
          category: "light",
          price: "25.00",
        },
        {
          id: 5,
          title: "Стул белый",
          img: ProductImg2,
          desc: "Lorem ispum dolor sit amet, consectetur adipisicing",
          category: "chairs",
          price: "60.00",
        },
      ],
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Lists items={this.state.currentItems} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }

    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id == item.id) {
        isInArray = true;
      }
    });

    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }
}

export default App;
