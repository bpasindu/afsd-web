function showList(){
    const icon = document.getElementById("showList1Icon");
    if (icon.classList.contains('fa-caret-down')) {
        icon.classList.remove('fa-caret-down');
        icon.classList.add('fa-caret-up');
    } else {
        icon.classList.remove('fa-caret-up');
        icon.classList.add('fa-caret-down');
    }

    let listEl = document.getElementById("companyList");
    if (listEl) {
        listEl.style.display = listEl.style.display === 'none' ? 'block' : 'none';
        if (listEl.style.display === 'none') {
            icon.classList.remove('fa-caret-up');
            icon.classList.add('fa-caret-down');
        }
        return;
    }

    listEl = document.createElement('div');
    listEl.id = 'companyList';
    listEl.className = 'company-list';
    Object.assign(listEl.style, {
        position: 'absolute',
        background: '#fff',
        border: '1px solid #ccc',
        padding: '6px',
        marginTop: '30px',
        minWidth: '260px',
        zIndex: 1000,
    });

    icon.parentElement.appendChild(listEl);

    fetch('https://student-api.acpt.lk/api/companies')
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
    })
    .then(data => {
        window.companiesData = data;

        if (!Array.isArray(data) || data.length === 0) {
            listEl.textContent = 'No companies found';
            return;
        }

        const ul = document.createElement('ul');
        ul.style.listStyle = 'none';
        ul.style.padding = '0';
        ul.style.margin = '0';

        data.forEach((item, idx) => {
            const li = document.createElement('li');
            li.style.padding = '8px 10px';
            li.style.cursor = 'default';
            li.style.display = 'flex';
            li.style.alignItems = 'center';
            li.style.justifyContent = 'space-between'; 
            li.style.gap = '8px';

            const nameSpan = document.createElement('span');
            nameSpan.className = 'company-name';
            nameSpan.textContent = item.company ;

            const caret = document.createElement('i');
            caret.className = 'fa-solid fa-caret-down';
            caret.style.cursor = 'pointer';
            caret.id = `showList2Icon-${idx}`;
            caret.setAttribute('onclick', `showList2(event, ${idx})`);

            li.appendChild(nameSpan);
            li.appendChild(caret);
            ul.appendChild(li);
        });

        listEl.appendChild(ul);
    })
    .catch(error => {
        listEl.textContent = 'Error loading companies';
        console.error(error);
    });
}

function showList2(event, companyIndex) {
    event.stopPropagation();

    const company = Array.isArray(window.companiesData) ? window.companiesData[companyIndex] : null;
    if (!company) return;

    const caretEl = event.currentTarget || event.target;
    const parentLi = caretEl.closest('li');
    if (!parentLi) return;

    if (caretEl.classList.contains('fa-caret-down')) {
        caretEl.classList.remove('fa-caret-down');
        caretEl.classList.add('fa-caret-up');
    } else {
        caretEl.classList.remove('fa-caret-up');
        caretEl.classList.add('fa-caret-down');
    }

    const next = parentLi.nextElementSibling;
    if (next && next.classList.contains('dept-list') && next.dataset.companyIndex === String(companyIndex)) {
        next.style.display = next.style.display === 'none' ? 'block' : 'none';
        if (next.style.display === 'none') {
            caretEl.classList.remove('fa-caret-up');
            caretEl.classList.add('fa-caret-down');
        }
        return;
    }

   
    const deptEl = document.createElement('ul');
    deptEl.className = 'dept-list';
    deptEl.dataset.companyIndex = String(companyIndex);
    Object.assign(deptEl.style, {
        listStyle: 'none',
        margin: '6px 0 0 0',
        padding: '0',
        marginLeft: '30px', 
        background: 'transparent',
    });

    const departments = Array.isArray(company.departments) ? company.departments : [];

    if (departments.length === 0) {
        const emptyLi = document.createElement('li');
        emptyLi.textContent = 'No departments';
        emptyLi.style.padding = '6px 8px';
        emptyLi.style.fontStyle = 'italic';
        deptEl.appendChild(emptyLi);
    } else {
        departments.forEach(dept => {
            const dli = document.createElement('li');
            dli.textContent = dept.name || 'Unnamed department';
            dli.style.padding = '6px 8px';
            dli.style.cursor = 'pointer';
            dli.addEventListener('mouseenter', () => dli.style.background = '#eef');
            dli.addEventListener('mouseleave', () => dli.style.background = 'transparent');
            deptEl.appendChild(dli);
        });
    }

    parentLi.parentNode.insertBefore(deptEl, parentLi.nextSibling);
}

