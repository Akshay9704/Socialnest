import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const InfluencersTable = () => {
  const columns = [
    {
      field: "username",
      headerName: "Username",
      description: "username",
      sortable: false,
      width: 110,
    },
    {
      field: "location",
      headerName: "Location",
      description: "location",
      sortable: false,
      width: 120,
    },
    {
      field: "followers",
      headerName: "Followers",
      type: "number",
      width: 80,
    },
    {
      field: "average_likes",
      headerName: "Avg. Likes",
      type: "number",
      width: 80,
    },
    {
      field: "average_engagement_rate",
      headerName: "Eng Rate",
      type: "number",
      width: 90,
    },
    {
      field: "categories",
      headerName: "Categories",
      type: "number",
      width: 150,
    },
    {
      field: "photo_url",
      headerName: "Photo",
      type: "number",
      width: 90,
    },
  ];

  const rows = [
    {
      id: 1,
      username: "user1",
      followers: 5000,
      average_likes: 150,
      location: "New York, NY",
      categories: ["food", "travel", "fashion"],
      average_engagement_rate: 0.05,
      photo_url: "https://example.com/user1_photo.jpg",
    },
    {
      id: 2,
      username: "user2",
      followers: 8000,
      average_likes: 250,
      location: "Los Angeles, CA",
      categories: ["fitness", "lifestyle"],
      average_engagement_rate: 0.055,
      photo_url: "https://example.com/user2_photo.jpg",
    },
    {
      id: 3,
      username: "user3",
      followers: 10000,
      average_likes: 300,
      location: "London, UK",
      categories: ["art", "photography"],
      average_engagement_rate: 0.06,
      photo_url: "https://example.com/user3_photo.jpg",
    },
    {
      id: 4,
      username: "user4",
      followers: 15000,
      average_likes: 180,
      location: "Paris, France",
      categories: ["travel", "nature"],
      average_engagement_rate: 0.04,
      photo_url: "https://example.com/user4_photo.jpg",
    },
    {
      id: 5,
      username: "user5",
      followers: 20000,
      average_likes: 400,
      location: "Tokyo, Japan",
      categories: ["fashion", "beauty"],
      average_engagement_rate: 0.07,
      photo_url: "https://example.com/user5_photo.jpg",
    },
    {
      id: 6,
      username: "user6",
      followers: 3000,
      average_likes: 90,
      location: "Sydney, Australia",
      categories: ["food", "lifestyle"],
      average_engagement_rate: 0.03,
      photo_url: "https://example.com/user6_photo.jpg",
    },
    {
      id: 7,
      username: "user7",
      followers: 12000,
      average_likes: 220,
      location: "Toronto, Canada",
      categories: ["fitness", "travel"],
      average_engagement_rate: 0.05,
      photo_url: "https://example.com/user7_photo.jpg",
    },
    {
      id: 8,
      username: "user8",
      followers: 6000,
      average_likes: 120,
      location: "Berlin, Germany",
      categories: ["fashion", "beauty"],
      average_engagement_rate: 0.04,
      photo_url: "https://example.com/user8_photo.jpg",
    },
    {
      id: 9,
      username: "user9",
      followers: 4000,
      average_likes: 80,
      location: "Barcelona, Spain",
      categories: ["art", "photography"],
      average_engagement_rate: 0.025,
      photo_url: "https://example.com/user9_photo.jpg",
    },
    {
      id: 10,
      username: "user10",
      followers: 9000,
      average_likes: 170,
      location: "Rio de Janeiro, Brazil",
      categories: ["lifestyle", "travel"],
      average_engagement_rate: 0.035,
      photo_url: "https://example.com/user10_photo.jpg",
    },
  ];

  return (
    <div
      style={{
        height: 400,
        width: "120%",
        backgroundColor: "white",
        marginTop: "30px",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default InfluencersTable;
