package uds.istituti

import com.manydesigns.portofino.resourceactions.crud.CrudAction
import com.manydesigns.portofino.security.AccessLevel
import com.manydesigns.portofino.security.RequiresPermissions
import com.manydesigns.portofino.security.SupportsPermissions

@RequiresPermissions(level = AccessLevel.VIEW)
class IstitutiCrudAction extends CrudAction {


}
