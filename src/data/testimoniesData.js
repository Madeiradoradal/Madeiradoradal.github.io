import img1 from "../images/customers/customer.svg";
import img2 from "../images/customers/customer1.svg";
import img3 from "../images/customers/customer3.svg";

export default [
  {
    sys: {
      id: "1"
    },
    fields: {
        name: "Customer ABC",
        slug: "customer1",
        comentary: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
        image: img1, 
        first: true
    }
  },
  {
    sys: {
      id: "2"
    },
    fields: {
        name: "Customer DRF",
        slug: "customer2",
        comentary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: img2,
        first: false
    }
  },
  {
    sys: {
      id: "3"
    },
    fields: {
        name: "Customer RTY",
        slug: "customer3",
        comentary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Praesent commodo cursus magna, vel scelerisque nisl consectetur",
        image: img3,
        first: false
    }
  },
];
