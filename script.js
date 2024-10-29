const ordersTableBody = document.getElementById('ordersTableBody');
const searchInput = document.getElementById('searchInput');
const agentNameInput = document.getElementById('agentName');
const suggestionsList = document.getElementById('suggestionsList');
const agentDropdown = document.getElementById('agentDropdown');
let orders = JSON.parse(localStorage.getItem('orders')) || [];

// استرجاع الطلبات المخزنة عند تحميل الصفحة
window.onload = function() {
    updateTable();
    populateAgentDropdown();
};

// إضافة طلب جديد
function addOrder() {
    const orderNumber = document.getElementById('orderNumber').value;
    const totalPrice = parseFloat(document.getElementById('totalPrice').value);
    const agentName = agentNameInput.value;
    const profit = parseFloat(document.getElementById('profit').value);
    const entryDate = new Date().toLocaleDateString();
    const notes = document.getElementById('notes').value;

    if (orders.some(order => order.number === orderNumber)) {
        alert('رقم الطلب موجود بالفعل.');
        return;
    }

    const newOrder = { number: orderNumber, totalPrice, agentName, profit, status: 'واصل', entryDate, notes };
    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));
    updateTable();
    document.getElementById('orderForm').reset();
    suggestionsList.innerHTML = '';
    populateAgentDropdown();
}

// تحديث الجدول
function updateTable(filteredOrders = orders) {
    ordersTableBody.innerHTML = '';

    let totalProfitsReceived = 0;
    let totalProfitsNotReceived = 0;
    let totalProfitsPartial = 0;

    filteredOrders.forEach((order, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.number}</td>
            <td>${order.totalPrice}</td>
            <td>${order.agentName}</td>
            <td>
                <input type="number" value="${order.profit}" onchange="updateProfit(${index}, this.value)" ${order.status === 'واصل' ? 'readonly' : ''}>
            </td>
            <td>${order.entryDate}</td>
            <td>
                <button class="${order.status === 'واصل' ? 'green' : order.status === 'غير واصل' ? 'red' : ''}" onclick="toggleStatus(${index})">
                    ${order.status}
                </button>
            </td>
            <td>${order.notes}</td>
            <td>
                <button class="red" onclick="deleteOrder(${index})">حذف</button>
            </td>
        `;
        ordersTableBody.appendChild(row);

        // حساب المجموع
        if (order.status === 'واصل') {
            totalProfitsReceived += order.profit;
        } else if (order.status === 'غير واصل') {
            totalProfitsNotReceived += order.profit;
        } else if (order.status === 'واصل جزئي') {
            totalProfitsPartial += order
