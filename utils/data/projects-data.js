import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Bank Customer Chunk Model',
        description: "I developed a Bank Customer Chunk Model that segments and categorizes bank customers based on shared characteristics, behaviors, and needs. This model allows banks to tailor products and services, improving customer satisfaction and operational efficiency. I utilized demographic, psychographic, and behavioral data to create distinct customer segments, which informed targeted marketing strategies and personalized customer interactions.",
        tools: ['Python', 'Pandas', 'SQL', 'Tableau', 'Scikit-learn', 'Flask'],
        role: 'Data Analyst',
        image: crefin, 

    },
    {
        id: 2,
        name: 'Exploratory Data Analysis in Python',
        description: "Conducted exploratory data analysis (EDA) using Python to uncover trends and relationships in a dataset analyzing factors influencing used car prices. The project involved importing libraries like Pandas, NumPy, Matplotlib, and Seaborn for data manipulation and visualization. Key steps included loading the data, performing initial inspections, cleaning the dataset, and conducting univariate and bivariate analyses. Data transformations and feature engineering were applied to enhance insights, leading to findings such as the impact of car age, ownership, and fuel type on pricing. This comprehensive EDA informed subsequent model building and decision-making processes.",
        tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
        role: 'Data Analyst',
        code: '',
        demo: '',
        image: travel, 
    },
    {
        id: 3,
        name: 'Cancer Prediction Machine Learning Model',
        description: "Developed a machine learning model to predict the presence or absence of cancer using a set of medical features. The project aimed to assist healthcare professionals in early diagnosis and treatment planning. Key objectives included selecting appropriate algorithms, evaluating model performance with metrics like accuracy, precision, recall, and F1-score, and identifying significant features impacting predictions. Methodology encompassed data preprocessing (cleaning, normalization, and feature engineering), model selection (logistic regression, decision trees, random forests, SVMs, neural networks), and thorough evaluation using metrics and visualizations. Addressed challenges such as data imbalance and overfitting through techniques like oversampling, cross-validation, and model interpretability methods such as SHAP values.",
        tools: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
        role: 'Machine Learning Engineer',
        code: '',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Creditworthiness Assessment Model',
        description: "Developed a predictive model to assess the creditworthiness of individuals using historical credit card data. The project aimed to analyze various factors such as credit history, income, and spending patterns to predict the likelihood of customer default on credit card payments. Key objectives included building an accurate machine learning model, identifying influential factors for credit card default, and improving risk assessment for financial institutions. Methodology encompassed data acquisition (gathering relevant datasets), data preparation (cleaning, feature engineering, and splitting), and model development (exploratory data analysis, feature selection, and hyperparameter tuning). Evaluated model performance with metrics like accuracy, precision, recall, F1-score, and AUC-ROC. Addressed challenges such as data quality issues and class imbalance through various techniques.",
        tools: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
        role: 'Machine Learning Engineer',
        code: '',
        demo: '',
        image: ayla,
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },