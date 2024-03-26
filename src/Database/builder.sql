DROP DATABASE IF EXISTS builder;
CREATE DATABASE IF NOT EXISTS builder;

USE builder;

-- Table for Construction Sites 建筑工地
CREATE TABLE ConstructionSites (
    id int auto_increment PRIMARY KEY,
    ConstructionSiteID VARCHAR(255),
    SiteName VARCHAR(255) NOT NULL COMMENT 'Site name',
    Address VARCHAR(255) NOT NULL COMMENT 'Address',
    Supervisor VARCHAR(255) NOT NULL COMMENT 'Supervisor',
    StartDate  datetime    default CURRENT_TIMESTAMP not null comment 'Start time',
    CompletionDate datetime    default CURRENT_TIMESTAMP not null comment 'Completion time',
    Budget VARCHAR(255) NOT NULL COMMENT 'Budget',
    Status VARCHAR(255) NOT NULL COMMENT 'Status',
    created_at datetime     default CURRENT_TIMESTAMP not null comment 'create time',
    updated_at datetime     default CURRENT_TIMESTAMP not null comment 'update time'
) COMMENT = 'Table for construction sites';

-- Table for Construction Companies
CREATE TABLE ConstructionCompanies (
    id int auto_increment primary key,
    CompanyID INT not null,
    CompanyName VARCHAR(255) NOT NULL COMMENT 'Company name',
    Address VARCHAR(255) NOT NULL COMMENT 'Address',
    ContactPhone VARCHAR(255) NOT NULL COMMENT 'Contact phone',
    RegistrationDate datetime DEFAULT CURRENT_TIMESTAMP NOT NULL COMMENT 'Registration date',
    ResponsiblePerson VARCHAR(255) NOT NULL COMMENT 'Responsible person',
    QualificationLevel VARCHAR(255) NOT NULL COMMENT 'Qualification level',
    Region VARCHAR(255) NOT NULL COMMENT 'Region',
    created_at datetime DEFAULT CURRENT_TIMESTAMP NOT NULL COMMENT 'Creation timestamp',
    updated_at datetime DEFAULT CURRENT_TIMESTAMP NOT NULL COMMENT 'Update timestamp'
) COMMENT = 'Table for construction companies';

-- Table for Managers
CREATE TABLE Managers (
    id INT auto_increment PRIMARY KEY,
    ManagerID INT NOT NULL,
    Name VARCHAR(255) NOT NULL COMMENT 'Name',
    Gender VARCHAR(255) NOT NULL COMMENT 'Gender',
    Age INT NOT NULL COMMENT 'Age',
    Contact INT NOT NULL COMMENT 'Contact',
    ManagedSite VARCHAR(255) NOT NULL COMMENT 'Managed site',
    Position VARCHAR(255) NOT NULL COMMENT 'Position',
    Salary VARCHAR(255) NOT NULL COMMENT 'Salary',
    EntryDate datetime COMMENT 'Entry date',
    created_at datetime DEFAULT CURRENT_TIMESTAMP NOT NULL COMMENT 'Creation timestamp',
    updated_at datetime DEFAULT CURRENT_TIMESTAMP NOT NULL COMMENT 'Update timestamp'
) COMMENT = 'Table for managers';

-- Table for Engineers
CREATE TABLE Engineers (
    id INT auto_increment PRIMARY KEY,
    EngineerID INT not null,
    Name VARCHAR(255) NOT NULL COMMENT 'Name',
    Gender ENUM('Male', 'Female') NOT NULL COMMENT 'Gender',
    Age INT NOT NULL COMMENT 'Age',
    Contact INT NOT NULL COMMENT 'Contact',
    Company VARCHAR(255) NOT NULL COMMENT 'Company',
    Position VARCHAR(255) NOT NULL COMMENT 'Position',
    Salary ENUM('Low', 'Medium', 'High') NOT NULL COMMENT 'Salary',
    created_at datetime DEFAULT CURRENT_TIMESTAMP NOT NULL COMMENT 'Creation timestamp',
    updated_at datetime DEFAULT CURRENT_TIMESTAMP NOT NULL COMMENT 'Update timestamp'
) COMMENT = 'Table for engineers';

-- Table for Construction Projects
CREATE TABLE ConstructionProjects (
    id INT auto_increment PRIMARY KEY,
    ProjectID INT not null,
    ProjectName VARCHAR(255) NOT NULL COMMENT 'Project name',
    ProjectType VARCHAR(255) NOT NULL COMMENT 'Project type',
    StartDate DATETIME NOT NULL COMMENT 'Start date',
    EndDate DATETIME NOT NULL COMMENT 'End date',
    Budget INT NOT NULL COMMENT 'Budget',
    Status VARCHAR(255) NOT NULL COMMENT 'Status',
    SiteID int NOT NULL COMMENT 'Site ID',
    created_at datetime DEFAULT CURRENT_TIMESTAMP NOT NULL COMMENT 'Creation timestamp',
    updated_at datetime DEFAULT CURRENT_TIMESTAMP NOT NULL COMMENT 'Update timestamp',
    
    FOREIGN KEY (SiteID) REFERENCES ConstructionSites(id)
) COMMENT = 'Table for construction projects';

-- Table for Materials
CREATE TABLE Materials (
    id INT auto_increment PRIMARY KEY,
    MaterialID INT not null,
    MaterialName VARCHAR(255) NOT NULL COMMENT 'Material name',
    Specification VARCHAR(255) NOT NULL COMMENT 'Specification',
    Unit VARCHAR(255) NOT NULL COMMENT 'Unit',
    Supplier VARCHAR(255) NOT NULL COMMENT 'Supplier',
    UnitPrice INT NOT NULL COMMENT 'Unit price',
    Stock INT NOT NULL COMMENT 'Stock',
    PurchaseDate DATETIME NOT NULL COMMENT 'Purchase date',
    created_at datetime DEFAULT CURRENT_TIMESTAMP NOT NULL COMMENT 'Creation timestamp',
    updated_at datetime DEFAULT CURRENT_TIMESTAMP NOT NULL COMMENT 'Update timestamp'
) COMMENT = 'Table for materials';

-- Table for Construction Logs
CREATE TABLE ConstructionLogs (
    id int auto_increment PRIMARY KEY,
    LogID INT not null,
    SiteID int NOT NULL COMMENT 'Site ID',
    Date datetime DEFAULT CURRENT_TIMESTAMP NOT NULL comment 'Date',
    WorkContent VARCHAR(255) NOT NULL COMMENT 'Work content',
    WorkHours INT NOT NULL COMMENT 'Work hours',
    CompletionStatus VARCHAR(255) NOT NULL COMMENT 'Completion status',
    Note text NOT NULL COMMENT 'Note',
    Worker VARCHAR(255) NOT NULL COMMENT 'Worker',
    created_at datetime DEFAULT CURRENT_TIMESTAMP NOT NULL COMMENT 'Creation timestamp',
    updated_at datetime DEFAULT CURRENT_TIMESTAMP NOT NULL COMMENT 'Update timestamp',
    FOREIGN KEY (SiteID) REFERENCES ConstructionSites(id)
) COMMENT = 'Table for construction logs';



----------------------------------------------------------------------
-- Table for Construction Site Management
CREATE TABLE ConstructionSiteManagement (
    ConstructionSiteManagementID INT  auto_increment PRIMARY KEY,
    SiteID int NOT NULL COMMENT 'Site ID',
    ManagerID INT NOT NULL COMMENT 'Manager ID',
    FOREIGN KEY (ManagerID) REFERENCES Managers(id),
    FOREIGN KEY (SiteID) REFERENCES ConstructionSites(id)
) COMMENT = 'Table for construction site management';

-- Table for Manager Management
CREATE TABLE ManagerManagement (
    CompanyID INT NOT NULL COMMENT 'Company ID',
    ManagerID INT NOT NULL COMMENT 'Manager ID',
    PRIMARY KEY (CompanyID, ManagerID),
    FOREIGN KEY (CompanyID) REFERENCES ConstructionCompanies(id),
    FOREIGN KEY (ManagerID) REFERENCES Managers(id)
) COMMENT = 'Table for manager management';

-- Table for Engineer Management
CREATE TABLE EngineerManagement (
    ManagerID INT NOT NULL COMMENT 'Manager ID',
    EngineerID INT NOT NULL COMMENT 'Engineer ID',
    PRIMARY KEY (ManagerID, EngineerID),
    FOREIGN KEY (ManagerID) REFERENCES Managers(id),
    FOREIGN KEY (EngineerID) REFERENCES Engineers(id)
) COMMENT = 'Table for engineer management';

-- Table for Project Manager Management
CREATE TABLE ProjectManagerManagement (
    ManagerID INT NOT NULL COMMENT 'Manager ID',
    ProjectID INT NOT NULL COMMENT 'Project ID',
    PRIMARY KEY (ManagerID, ProjectID),
    FOREIGN KEY (ManagerID) REFERENCES Managers(id),
    FOREIGN KEY (ProjectID) REFERENCES ConstructionProjects(id)
) COMMENT = 'Table for project manager management';

-- Table for Log Manager Management
CREATE TABLE LogManagerManagement (
    ManagerID INT NOT NULL COMMENT 'Manager ID',
    LogID INT NOT NULL COMMENT 'Log ID',
    PRIMARY KEY (ManagerID, LogID),
    FOREIGN KEY (ManagerID) REFERENCES Managers(id),
    FOREIGN KEY (LogID) REFERENCES ConstructionLogs(id)
) COMMENT = 'Table for log manager management';

-- Table for Material Management
CREATE TABLE MaterialManagement (
    ManagerID INT NOT NULL COMMENT 'Manager ID',
    MaterialID INT NOT NULL COMMENT 'Material ID',
    PRIMARY KEY (ManagerID, MaterialID),
    FOREIGN KEY (ManagerID) REFERENCES Managers(id),
    FOREIGN KEY (MaterialID) REFERENCES Materials(id)
) COMMENT = 'Table for material management';
