const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    Title: String,
    Company: String,
    CompanyNameforEmails: String,
    Email: String,
    EmailStatus: String,
    EmailConfidence: String,
    Seniority: String,
    Departments: String,
    FirstPhone: String,
    WorkDirectPhone: String,
    HomePhone: String,
    MobilePhone: String,
    CorporatePhone: String,
    Employees: Number,
    Industry: String,
    Keywords: String,
    PersonLinkedinUrl: String,
    Website: String,
    CompanyLinkedinUrl: String,
    FacebookUrl: String,
    TwitterUrl: String,
    City: String,
    State: String,
    Country: String,
    CompanyAddress: String,
    CompanyCity: String,
    CompanyState: String,
    CompanyCountry: String,
    CompanyPhone: String,
    SEODescription: String,
    Technologies: String,
    AnnualRevenue: Number,
    TotalFunding: Number,
    LatestFunding: String,
    LatestFundingAmount: Number,
    LastRaisedAt: Date
});

const Profile = mongoose.model('Employee', schema);

module.exports = Profile;
