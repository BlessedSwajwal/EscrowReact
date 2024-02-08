/* eslint-disable react/prop-types */
import { Box, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Carousel } from "primereact/carousel";

import { TabView, TabPanel } from "primereact/tabview";
import { Avatar } from "primereact/avatar";
import { useState } from "react";

function ProviderHome() {
  var orders = [
    {
      id: "b2c9d850-dc36-4d15-8b1f-bf2af2e2137a",
      name: "Build a composite deck in backyard",
      description:
        "12x16 feet deck with railing. Low-maintenance composite material. Sturdy construction for entertaining. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dicta porro quidem! Facilis modi laboriosam sequi perspiciatis nulla voluptatum deserunt illo quod ex necessitatibus accusamus magni inventore expedita unde id saepe, soluta ratione at earum quo, et voluptate! Commodi voluptate iusto ullam delectus exercitationem voluptatum repellendus rem nesciunt? Repudiandae, pariatur. Architecto eaque, illum dolores iusto explicabo quam deserunt dolore. Ipsam est sint esse obcaecati sunt quis aliquid ab dolore aspernatur magni at corrupti beatae totam, repudiandae animi doloremque dolores ea quia temporibus illo asperiores atque architecto blanditiis! Mollitia sit aliquid quisquam doloremque dolorum ex atque, ullam tempore suscipit aliquam ab?",
      cost: 6000,
      orderStatus: "created",
      creatorId: "5e23a4e5-2564-4f3b-9069-4fcb68eab0f5",
      allowedDays: 14,
      providerId: "00000000-0000-0000-0000-000000000000",
      acceptedDate: "0001-01-01T00:00:00",
      deadLine: "0001-01-15T00:00:00",
      bidsCount: 0,
      acceptedBid: "00000000-0000-0000-0000-000000000000",
    },
    {
      id: "b2c9d850-dc36-4d15-8b1f-bf2af2e2137b",
      name: "Build a composite deck in backyard",
      description:
        "12x16 feet deck with railing. Low-maintenance composite material. Sturdy construction for entertaining.",
      cost: 6000,
      orderStatus: "created",
      creatorId: "5e23a4e5-2564-4f3b-9069-4fcb68eab0f5",
      allowedDays: 14,
      providerId: "00000000-0000-0000-0000-000000000000",
      acceptedDate: "0001-01-01T00:00:00",
      deadLine: "0001-01-15T00:00:00",
      bidsCount: 0,
      acceptedBid: "00000000-0000-0000-0000-000000000000",
    },
    {
      id: "b2c9d850-dc36-4d15-8b1f-bf2af2e2137c",
      name: "Build a composite deck in backyard",
      description:
        "12x16 feet deck with railing. Low-maintenance composite material. Sturdy construction for entertaining.",
      cost: 6000,
      orderStatus: "created",
      creatorId: "5e23a4e5-2564-4f3b-9069-4fcb68eab0f5",
      allowedDays: 14,
      providerId: "00000000-0000-0000-0000-000000000000",
      acceptedDate: "0001-01-01T00:00:00",
      deadLine: "0001-01-15T00:00:00",
      bidsCount: 0,
      acceptedBid: "00000000-0000-0000-0000-000000000000",
    },
  ];

  const carouselData = [
    {
      title: "Sell your service with assurance",
      description:
        "We hold the funds before you start working. After the completion, we disburse you your earnings minus our service charge",
      image: "https://cdn-icons-png.flaticon.com/512/4157/4157207.png",
    },
    {
      title: "Power on you hands",
      description:
        "Review tons of orders and choose any amount you like. Place your proposals and wait for it to be accepted.",
      image: "https://cdn-icons-png.flaticon.com/512/6577/6577645.png",
    },
    {
      title: "Grow your income with side hustles",
      description:
        "Keep your main job and work on the side with our online freelancing/escrow platform.",
      image: "https://clipart-library.com/images/yckrderqi.png",
    },
  ];

  const carousalTemplate = (data) => {
    return (
      <Box
        display="flex"
        alignItems="flex-start"
        margin="auto"
        p={5}
        bgcolor="lightblue"
        marginBlock={2}
        borderRadius={10}
        sx={{
          width: { xs: "75vw", sm: "70vw", md: "50vw" },
        }}
      >
        <Box>
          <Typography mb={5} variant="h6" fontWeight={600}>
            {data.title}
          </Typography>
          <Typography>{data.description}</Typography>
        </Box>
        <img
          src={data.image}
          alt="carousel-img"
          width="300px"
          height="100px"
          style={{ objectFit: "contain" }}
        />
      </Box>
    );
  };
  return (
    <Box>
      <div className="card">
        <Carousel
          value={carouselData}
          numScroll={1}
          numVisible={1}
          itemTemplate={carousalTemplate}
          autoplayInterval={7000}
        />
      </div>
      <Box
        marginInline={3}
        marginBlock={2}
        boxShadow={5}
        p={5}
        bgcolor="#f5f0f0"
        borderRadius={10}
        display="flex"
        flexDirection="column"
        gap={2}
      >
        <OrderTabs />
        {orders.map((order) => (
          <OrderBox key={order.id} order={order} />
        ))}
      </Box>
    </Box>
  );
}

function OrderBox({ order }) {
  return (
    <Box>
      <Box p={1}>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={`/order/${order.id}`}
        >
          <Typography variant="h5" fontWeight={700}>
            {order.name}
          </Typography>
        </Link>
        <Box
          mb={3}
          display="flex"
          gap="10px"
          sx={{ fontSize: 10, color: "gray" }}
        >
          <Typography>
            <b>Budget:</b> Rs. {order.cost / 100}
          </Typography>
          <Typography>
            <b>Proposed Time:</b> {order.allowedDays} days
          </Typography>
        </Box>
        <Box mb={2} display="flex" gap="10px" sx={{ fontSize: 10 }}>
          <Typography textAlign="justify">
            <b>Description:</b> {order.description}
          </Typography>
        </Box>
        <Divider sx={{ backgroundColor: "black", height: "2px" }} />
      </Box>
    </Box>
  );
}

function OrderTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const styles = {
    cursor: "pointer",
    marginInline: 3,
    padding: "14px",
    borderRadius: "10px",
    marginBlock: "5px",
  };
  const tab1Style = (options) => {
    return (
      <div
        onClick={options.onClick}
        style={{
          ...styles,
          backgroundColor: activeIndex == 0 ? "green" : "",
        }}
      >
        <Typography fontSize={20} fontWeight={600}>
          Bid On Orders
        </Typography>
      </div>
    );
  };
  const tab2Style = (options) => {
    return (
      <div
        onClick={options.onClick}
        style={{
          ...styles,
          backgroundColor: activeIndex == 1 ? "green" : "",
        }}
      >
        <Typography fontSize={20} fontWeight={600}>
          Your Orders
        </Typography>
      </div>
    );
  };
  const tab3Style = (options) => {
    return (
      <div
        onClick={options.onClick}
        style={{
          ...styles,
          backgroundColor: activeIndex == 2 ? "green" : "",
        }}
      >
        <Typography fontSize={20} fontWeight={600}>
          Completed Orders
        </Typography>
      </div>
    );
  };
  const tab4Style = (options) => {
    return (
      <div
        onClick={options.onClick}
        style={{
          ...styles,
          backgroundColor: activeIndex == 3 ? "green" : "",
        }}
      >
        <Typography fontSize={20} fontWeight={600}>
          Disputed Orders
        </Typography>
      </div>
    );
  };
  return (
    <TabView
      activeIndex={activeIndex}
      onTabChange={(e) => setActiveIndex(e.index)}
    >
      <TabPanel header="Bid on Orders" headerTemplate={tab1Style}>
        <Typography fontSize={16}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          sapiente eos nostrum, soluta inventore atque eligendi labore mollitia
          culpa praesentium ab consectetur ut molestiae tenetur accusantium sunt
          quos quis totam quaerat odit tempora. Nesciunt quia, fugiat natus
          beatae, rem quaerat ex quod sequi saepe voluptatem atque earum, harum
          explicabo consectetur error voluptates. Itaque, quas aliquid odit est
          sapiente aliquam non nulla voluptatibus repellendus veniam, ipsa sint
          reprehenderit, incidunt suscipit dicta harum? Eos, sit quam totam
          temporibus reprehenderit delectus enim aspernatur nisi nobis
          doloribus! Ratione dignissimos facere aliquid modi nam perspiciatis
          iusto est ex, deserunt aut nihil repellendus quo molestiae. Facere!
        </Typography>
      </TabPanel>
      <TabPanel headerTemplate={tab2Style} header="Your Orders">
        <Typography fontSize={16}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          sapiente eos nostrum, soluta inventore atque eligendi labore mollitia
          culpa praesentium ab consectetur ut molestiae tenetur accusantium sunt
          quos quis totam quaerat odit tempora. Nesciunt quia, fugiat natus
          beatae, rem quaerat ex quod sequi saepe voluptatem atque earum, harum
          explicabo consectetur error voluptates. Itaque, quas aliquid odit est
          sapiente aliquam non nulla voluptatibus repellendus veniam, ipsa sint
          reprehenderit, incidunt suscipit dicta harum? Eos, sit quam totam
          temporibus reprehenderit delectus enim aspernatur nisi nobis
          doloribus! Ratione dignissimos facere aliquid modi nam perspiciatis
          iusto est ex, deserunt aut nihil repellendus quo molestiae. Facere!
        </Typography>
      </TabPanel>
      <TabPanel headerTemplate={tab3Style} header="Completed Orders">
        <Typography fontSize={16}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          sapiente eos nostrum, soluta inventore atque eligendi labore mollitia
          culpa praesentium ab consectetur ut molestiae tenetur accusantium sunt
          quos quis totam quaerat odit tempora. Nesciunt quia, fugiat natus
          beatae, rem quaerat ex quod sequi saepe voluptatem atque earum, harum
          explicabo consectetur error voluptates. Itaque, quas aliquid odit est
          sapiente aliquam non nulla voluptatibus repellendus veniam, ipsa sint
          reprehenderit, incidunt suscipit dicta harum? Eos, sit quam totam
          temporibus reprehenderit delectus enim aspernatur nisi nobis
          doloribus! Ratione dignissimos facere aliquid modi nam perspiciatis
          iusto est ex, deserunt aut nihil repellendus quo molestiae. Facere!
        </Typography>
      </TabPanel>
      <TabPanel headerTemplate={tab4Style} header="Disputed Orders">
        <Typography fontSize={16}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          sapiente eos nostrum, soluta inventore atque eligendi labore mollitia
          culpa praesentium ab consectetur ut molestiae tenetur accusantium sunt
          quos quis totam quaerat odit tempora. Nesciunt quia, fugiat natus
          beatae, rem quaerat ex quod sequi saepe voluptatem atque earum, harum
          explicabo consectetur error voluptates. Itaque, quas aliquid odit est
          sapiente aliquam non nulla voluptatibus repellendus veniam, ipsa sint
          reprehenderit, incidunt suscipit dicta harum? Eos, sit quam totam
          temporibus reprehenderit delectus enim aspernatur nisi nobis
          doloribus! Ratione dignissimos facere aliquid modi nam perspiciatis
          iusto est ex, deserunt aut nihil repellendus quo molestiae. Facere!
        </Typography>
      </TabPanel>
    </TabView>
  );
}

export default ProviderHome;
