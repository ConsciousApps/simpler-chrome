// Schema
import activitySelectFields from '+/schema/activity/selectFields'
import categorySelectFields from '+/schema/category/selectFields'
import circleSelectFields from '+/schema/circle/selectFields'
import todoSelectFields from '+/schema/todo/selectFields'
import userSelectFields from '+/schema/user/selectFields'

const ApisSchemaCircleSelect = {
	...circleSelectFields,
	// --- RELATIONS ---
	Activities: { select: activitySelectFields },
	Categories: { select: categorySelectFields },
	Todos: { select: todoSelectFields },
	UserAdmins: { select: userSelectFields },
	UserMembers: { select: userSelectFields },
	UserRequests: { select: userSelectFields }
}

export default ApisSchemaCircleSelect
