import { createBrowserRouter, RouterProvider } from "react-router"
import { AppManagement, AppManagementAnalytics, AppManagementForum, AppManagementMonetization, AppManagementOverview, AppManagementReleases, AppManagementReviewsAndRatings, AppManagementTesting, AppManagementVerification, CreatePassword, DeveloperEnvironment, DeveloperForum, DeveloperInformation, FeatureSuggestions, ForgotPassword, NotFound, Notification, Overview, Payouts, ResetPassword, RevenueOverview, Signin, Signup } from "./pages";
import MainLayout from "./components/layouts/MainLayout";
import SalesAndPurchases from "./pages/monetization/sales-and-purchases/sales-and-purchases";



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Overview /> },
        { path: "overview", element: <Overview /> },
      ]
    },
    {
      path: "/app-management",
      element: <MainLayout />,
      children: [
        { index: true, element: <AppManagement /> },
        { path: "analytics", element: <AppManagementAnalytics /> },
        { path: "monetization", element: <AppManagementMonetization /> },
        { path: "overview", element: <AppManagementOverview /> },
        { path: "releases", element: <AppManagementReleases /> },
        { path: "reviews-and-rating", element: <AppManagementReviewsAndRatings /> },
        { path: "testing", element: <AppManagementTesting /> },
        { path: "verification", element: <AppManagementVerification /> },
        { path: "forum", element: <AppManagementForum /> },
      ]
    },
    {
      path: "/feature-suggestions",
      element: <MainLayout />,
      children: [
        { index: true, element: <FeatureSuggestions /> },
        { path: "feature-suggestions", element: <FeatureSuggestions /> },
      ]
    },
    {
      path: "/developer-information",
      element: <MainLayout />,
      children: [
        { index: true, element: <DeveloperInformation /> },
        { path: "developer-information", element: <DeveloperInformation /> },
      ]
    },
    {
      path: "/developer-tools",
      element: <MainLayout />,
      children: [
        { index: true, element: <DeveloperEnvironment /> },
        { path: "environment", element: <DeveloperEnvironment /> },
      ]
    },
    {
      path: "/community",
      element: <MainLayout />,
      children: [
        { index: true, element: <DeveloperForum /> },
        { path: "developer-forum", element: <DeveloperForum /> },
        { path: "feature-suggestions", element: <FeatureSuggestions /> },
      ]
    },
    {
      path: "/account-settings",
      element: <MainLayout />,
      children: [
        { index: true, element: <DeveloperInformation /> },
        { path: "developer-information", element: <DeveloperInformation /> },
        { path: "notification", element: <Notification /> },
      ]
    },
    {
      path: "/monetization",
      element: <MainLayout />,
      children: [
        { index: true, element: <RevenueOverview /> },
        { path: "revenue-overview", element: <RevenueOverview /> },
        { path: "payouts", element: <Payouts /> },
        { path: "sales-and-purchases", element: <SalesAndPurchases /> },
      ]
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/register",
      element: <Signup />,
    },
    {
      path: "/create-password",
      element: <CreatePassword />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/reset-password",
      element: <ResetPassword />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
