import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Register, Error, ProtectedRoute } from "./pages";
import {
  Profile,
  SharedLayout,
  AllAdvisors,
  AddAdvisorPage,
  AdvisorStats,
  AddAgent,
  AllAgents,
  AllDealers,
  AddDealer,
  CreateEmail,
  AddEmailGroup,
  EmailClientInbox,
  AllEmailTemplates,
  CreateEmails,
} from "./pages/dashboard";
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
             
          }
        >
          {/* <Route index="advisor-stats" element={<AdvisorStats />} /> */}
          <Route index="all-advisors" element={<AllAdvisors />} />
          <Route path="add-advisor" element={<AddAdvisorPage />} />
          <Route path="all-agents" element={<AllAgents />} />
          <Route path="add-agent" element={<AddAgent />} />
          <Route path="profile" element={<Profile />} />
          <Route path="all-dealers" element={<AllDealers />} />
          <Route path="add-dealer" element={<AddDealer />} />
          <Route path="create-emails" element={<CreateEmails />} />
          {/* <Route path="add-emailgroup" element={<AddEmailGroup />} />
          <Route path="email-client-inbox" element={<EmailClientInbox />} />
          <Route path="create-email" element={<CreateEmail />} />
          <Route path="all-email-templates" element={<AllEmailTemplates />} /> */}
        </Route>
        
        
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
