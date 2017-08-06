import React, {PropTypes} from 'react';
import FilterConfigControls from './FilterConfigControls';
import FilterComponent from './FilterComponent';

class SortLinesFilterComponent extends FilterComponent {

    render() {
        return (
            <div className="FilterConfig FindAllFilterConfig">
                <div className="FilterConfig__Header">
                    Sort
                    <div className="btn-group pull-right">
                        <FilterConfigControls toggleShowHelp={this.toggleShowHelp} toggleShowDescription={this.toggleShowDescription} onEnabledClick={this.props.onEnabledClick} onDeleteClick={this.props.onDeleteClick} enabled={this.props.enabled}/>
                    </div>
                </div>
                <div className={this.props.enabled ? 'FilterConfig__Contents' : 'FilterConfig__Contents FilterConfig__Contents--Hidden'}>
                    <form>
                        <fieldset>
                            <div className="form-group">
                                <label className="FilterConfig__Contents__Label">Sorts lines {/* FIXME implement (showing 0 lines) */}</label>
                            </div>
                        </fieldset>
                        <fieldset className={this.state.showDescription ? 'FilterConfig__Contents__Description' : 'FilterConfig__Contents__Description FilterConfig__Contents__Description--Hidden'}>
                            <div className="form-group">
                                <label className="FilterConfig__Contents__Label">Description</label>
                                <input type="text" className="form-control input-sm" value={this.props.description} onChange={(event) => {
                                    this.props.onDescriptionChange(event.target.value);
                                }}/>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}

SortLinesFilterComponent.propTypes = {
    description: PropTypes.string.isRequired,
    //
    enabled: PropTypes.bool.isRequired,
    //
    //
    //
    onDescriptionChange: PropTypes.func.isRequired,
    //
    onEnabledClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired
};

export default SortLinesFilterComponent;
