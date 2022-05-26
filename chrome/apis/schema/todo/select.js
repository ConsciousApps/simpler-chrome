// Schema
import activitySelectFields from '+/schema/activity/selectFields'
import categorySelectFields from '+/schema/category/selectFields'
import circleSelectFields from '+/schema/circle/selectFields'
import todoSelectFields from '+/schema/todo/selectFields'
import userSelectFields from '+/schema/user/selectFields'

const ApisSchemaTodoSelect = {
	...todoSelectFields,
	// --- RELATIONS ---
	Activities: { select: activitySelectFields },
	Categories: { select: categorySelectFields },
	Circle: { select: circleSelectFields },
	User: { select: userSelectFields }
}

export default ApisSchemaTodoSelect
