// script.js

// Data for the pie chart
const data = {
    labels: [
        'Custom Website Design',
        'E-commerce Development',
        'SEO Optimization',
        'Content Management Systems',
        'Responsive Web Design',
        'Mobile App Development',
        'Website Maintenance',
        'UX/UI Design',
        'Web Hosting',
        'Domain Registration',
        'SSL Certificate Implementation',
        'API Integration',
        'Database Development',
        'Custom Web Application Development',
        'Website Redesign',
        'Landing Page Design',
        'Graphic Design Services',
        'Logo Design',
        'Social Media Integration',
        'Email Marketing',
        'Blog Development',
        'Website Analytics',
        'Website Speed Optimization',
        'Security Audits',
        'Backup and Restore Services',
        'User Training and Support',
        'Multilingual Website Development',
        'Accessibility Compliance',
        'Website Copywriting',
        'Custom Forms Development',
        'Online Booking Systems',
        'Membership Website Development',
        'Payment Gateway Integration',
        'Forum/Community Site Development',
        'Newsletter Setup',
        'Photo and Video Gallery Creation',
        'Virtual Tours and Interactive Maps',
        'Online Survey and Feedback Tools',
        'Event Calendar Integration',
        'Chatbot Integration',
        'Customer Portal Development',
        'Affiliate Marketing Setup',
        'Product Catalog Development',
        'Order Management System',
        'Inventory Management System',
        'Project Management Tools',
        'CRM Integration',
        'Custom Plugin Development',
        'Custom Theme Development',
        'Online Course and LMS Development',
        'Webinar Setup',
        'FAQ Page Development',
        'Knowledge Base Development',
        'Directory Website Development',
        'Real Estate Website Development',
        'Job Board Website Development',
        'Classified Ads Website Development',
        'Travel Booking Website Development',
        'Restaurant Website Development',
        'Portfolio Website Development',
        'Personal Blog Setup',
        'Business Blog Setup',
        'Government Website Development',
        'NGO/Non-Profit Website Development',
        'Education Website Development',
        'Health and Fitness Website Development',
        'News and Magazine Website Development',
        'Entertainment Website Development',
        'Fashion Website Development',
        'Automotive Website Development',
        'Music and Band Website Development',
        'Photography Website Development',
        'Wedding Website Development',
        'Event Planning Website Development',
        'Hotel and Hospitality Website Development',
        'Consulting Website Development',
        'Legal Services Website Development',
        'Financial Services Website Development',
        'Insurance Website Development',
        'Real Estate IDX Integration',
        'Auction Website Development',
        'Crowdfunding Platform Development',
        'SaaS Product Development',
        'Marketplace Development',
        'Multi-Vendor E-commerce Development',
        'Coupon Website Development',
        'Price Comparison Website Development',
        'Job Application Portal Development',
        'Freelance Marketplace Development',
        'Donation Platform Development',
        'Subscription Box Website Development',
        'Online Magazine Development',
        'Custom Dashboard Development',
        'Interactive Infographic Creation',
        'Podcast Website Development',
        'Event Ticketing Website Development',
        'Membership Subscription Website',
        'Multi-Language Website Development'
    ],
    datasets: [{
        label: 'Service Quantities',
        data: [
            50, 30, 40, 25, 60, 20, 35, 45, 55, 50, 50, 25, 30, 15, 40, 45, 50, 40, 30, 25, 20, 35, 40, 30, 25,
            20, 15, 10, 25, 30, 15, 10, 25, 30, 15, 20, 10, 5, 15, 25, 30, 15, 10, 5, 10, 5, 10, 10, 5, 10, 5, 10,
            15, 10, 10, 10, 10, 5, 15, 30, 20, 10, 15, 10, 5, 15, 10, 10, 5, 10, 5, 10, 5, 10, 15, 10, 5, 10, 15,
            10, 10, 20, 5
        ],
        backgroundColor: [
            '#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#4BC0C0', '#9966FF', '#FF9F40', '#FF5722', '#795548', '#607D8B',
            '#9E9E9E', '#FFC107', '#03A9F4', '#8BC34A', '#FFEB3B', '#FF9800', '#9C27B0', '#3F51B5', '#4CAF50', '#FF5722',
            '#FFC107', '#8BC34A', '#FF9800', '#03A9F4', '#FFEB3B', '#9E9E9E', '#795548', '#607D8B', '#3F51B5', '#9C27B0',
            '#FF5722', '#4CAF50', '#8BC34A', '#FF9800', '#03A9F4', '#FFC107', '#FFEB3B', '#FF9800', '#FF5722', '#FFEB3B',
            '#9E9E9E', '#3F51B5', '#8BC34A', '#4CAF50', '#9C27B0', '#FF9800', '#03A9F4', '#FFEB3B', '#FF9800', '#FF5722',
            '#FFEB3B', '#FF9800', '#4CAF50', '#9E9E9E', '#FFC107', '#3F51B5', '#8BC34A', '#FF9800', '#FFEB3B', '#9C27B0',
            '#4CAF50', '#FF9800', '#FFEB3B', '#FF5722'
        ],
        hoverOffset: 4
    }]
};

// Create the pie chart
const ctx = document.getElementById('myPieChart').getContext('2d');
const myPieChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw;
                    }
                }
            }
        }
    }
});
