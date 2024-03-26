> ConstructionSites | done



معايير الاي بي اي 
1. خمس دوال مختلفة 
    - جميع البيانات
    - الاضافة 
    - عنصر واحد
    - تعديل البيانات 
    - حذف البيانات

2. التاكد من رابط الاي بي اي
    - مثال:
        - /v1/csr     -> ConstructionSites

3. مطابقة جسم الطلب مع البيانات الموجودة في القائمة 
    - مثال:
    جسم الطلب:
    {
    "ConstructionSiteID": "CS001",
    "SiteName": "Example Construction Site",
    "Address": "123 Main Street",
    "Supervisor": "John Doe",
    "StartDate": "2024-03-20",
    "CompletionDate": "2024-12-31",
    "Budget": 1000000,
    "Status": "In Progress"
    }
    متطابق مع:
        const constructionSiteData = [
            data.ConstructionSiteID,
            data.SiteName,
            data.Address,
            data.Supervisor,
            data.StartDate,
            data.CompletionDate,
            data.Budget,
            data.Status,
        ]


4. عند حصول خطاء التاكد من سطر الاوامر
    - ctrl + `