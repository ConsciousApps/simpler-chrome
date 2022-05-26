// Schema
import activitySelectFields from '+/schema/activity/selectFields'
import categorySelectFields from '+/schema/category/selectFields'
import circleSelectFields from '+/schema/circle/selectFields'
import todoSelectFields from '+/schema/todo/selectFields'
import userSelectFields from '+/schema/user/selectFields'

const ApisSchemaCategorySelect = {
	...categorySelectFields,
	// --- RELATIONS ---
	Activities: { select: activitySelectFields },
	Circle: { select: circleSelectFields },
	Todos: { select: todoSelectFields },
	User: { select: userSelectFields }
}

export default ApisSchemaCategorySelect
