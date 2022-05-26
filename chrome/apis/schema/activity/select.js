// Schema
import activitySelectFields from '+/schema/activity/selectFields'
import categorySelectFields from '+/schema/category/selectFields'
import circleSelectFields from '+/schema/circle/selectFields'
import todoSelectFields from '+/schema/todo/selectFields'
import userSelectFields from '+/schema/user/selectFields'

const ApisSchemaActivitySelect = {
	...activitySelectFields,
	// --- RELATIONS ---
	Category: { select: categorySelectFields },
	Circle: { select: circleSelectFields },
	Todo: { select: todoSelectFields },
	User: { select: userSelectFields }
}

export default ApisSchemaActivitySelect
