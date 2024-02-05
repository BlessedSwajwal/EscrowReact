const orders = [
  {
    id: "5fccb406-c368-411f-82fbsnkf-05039b217d1b",
    name: "Build a composite deck in backyard",
    description:
      "12x16 feet deck with railing. Low-maintenance composite material. Sturdy construction for entertaining. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia id ad in labore, ex quae minus itaque nesciunt voluptatum quam voluptates quibusdam, consequuntur dolorum doloribus delectus? Perferendis laudantium rerum optio? Earum in at deleniti tempore enim, magni laboriosam debitis aliquam ipsam aliquid! Consequuntur quo nesciunt placeat ex amet distinctio illum dolorem magni, tempora vel omnis, ea eum ratione nostrum sunt aliquam dicta alias. Maxime sed qui soluta repudiandae mollitia eveniet magni cum voluptate, aut nesciunt, alias asperiores? Consequuntur ipsa doloribus facere iusto voluptatem. Sed aperiam neque, nesciunt perspiciatis nihil praesentium maxime ipsa! Voluptate quasi dignissimos officia, at ullam enim rerum!",
    cost: 6000,
    orderStatus: "pending",
    creatorId: "25d88471-1da1-484c-9966-208212a4b65b",
    allowedDays: 14,
    providerId: "00000000-0000-0000-0000-000000000000",
    acceptedDate: "0001-01-01T00:00:00",
    deadLine: "0001-01-15T00:00:00",
    paymentUri: "",
    bids: ["a", "b"],
    acceptedBid: "00000000-0000-0000-0000-000000000000",
  },
  {
    id: "5fccb406-c362228-411f-82ff-05039b217d1c",
    name: "Build a composite deck in backyard",
    description:
      "12x16 feet deck with railing. Low-maintenance composite material. Sturdy construction for entertaining. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias ratione vero eum obcaecati veritatis quidem similique. Quaerat itaque impedit, eaque, facere beatae enim non corporis sed nulla explicabo voluptas dolorem!",
    cost: 6000,
    orderStatus: "pending",
    creatorId: "25d88471-1da1-484c-9966-208212a4b65b",
    allowedDays: 14,
    providerId: "00000000-0000-0000-0000-000000000000",
    acceptedDate: "0001-01-01T00:00:00",
    deadLine: "0001-01-15T00:00:00",
    paymentUri: "",
    bids: [],
    acceptedBid: "00000000-0000-0000-0000-000000000000",
  },
  {
    id: "5fccb406-c368-411f-82ff-03455039b217d1d",
    name: "Build a composite deck in backyard",
    description:
      "12x16 feet deck with railing. Low-maintenance composite material. Sturdy construction for entertaining.",
    cost: 6000,
    orderStatus: "pending",
    creatorId: "25d88471-1da1-484c-9966-208212a4b65b",
    allowedDays: 14,
    providerId: "00000000-0000-0000-0000-000000000000",
    acceptedDate: "0001-01-01T00:00:00",
    deadLine: "0001-01-15T00:00:00",
    paymentUri: "",
    bids: [],
    acceptedBid: "00000000-0000-0000-0000-000000000000",
  },
  {
    id: "5fccb406-c368-411f-82ff-afz05039b217d1e",
    name: "Build a composite deck in backyard",
    description:
      "12x16 feet deck with railing. Low-maintenance composite material. Sturdy construction for entertaining.",
    cost: 6000,
    orderStatus: "processing",
    creatorId: "25d88471-1da1-484c-9966-208212a4b65b",
    allowedDays: 14,
    providerId: "00000000-0000-0000-0000-000000000000",
    acceptedDate: "0001-01-01T00:00:00",
    deadLine: "0001-01-15T00:00:00",
    paymentUri: "",
    bids: [],
    acceptedBid: "00000000-0000-0000-0000-000000000000",
  },
  {
    id: "5fccb406-c368-411f-82ff-05039b2ff17d1f",
    name: "Build a composite deck in backyard",
    description:
      "12x16 feet deck with railing. Low-maintenance composite material. Sturdy construction for entertaining.",
    cost: 6000,
    orderStatus: "completed",
    creatorId: "25d88471-1da1-484c-9966-208212a4b65b",
    allowedDays: 14,
    providerId: "00000000-0000-0000-0000-000000000000",
    acceptedDate: "0001-01-01T00:00:00",
    deadLine: "0001-01-15T00:00:00",
    paymentUri: "",
    bids: [],
    acceptedBid: "00000000-0000-0000-0000-000000000000",
  },
];

export const PendingOrders = () => orders;
export const ProcessingOrders = () =>
  orders.filter((o) => o.orderStatus == "processing");
export const CompletedOrders = () =>
  orders.filter((o) => o.orderStatus == "completed");
export const DisputedOrders = () => orders;

export const GetOrder = (id) => orders.find((o) => o.id == id);
