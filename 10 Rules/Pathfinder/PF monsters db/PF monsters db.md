---

database-plugin: basic

---

```yaml:dbfolder
name: Pathfinder Monsters
description: A listing of every monster in the core Pathfinder rulebooks
columns:
  __file__:
    key: __file__
    id: __file__
    input: markdown
    label: File
    accessorKey: __file__
    isMetadata: true
    skipPersist: false
    isDragDisabled: false
    csvCandidate: true
    position: 1
    isHidden: false
    sortIndex: 1
    isSorted: true
    isSortedDesc: false
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: true
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  CR:
    input: number
    key: CR
    accessorKey: CR
    label: CR
    position: 5
    skipPersist: false
    isHidden: false
    sortIndex: -1
    isSorted: false
    isSortedDesc: false
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  MR:
    input: text
    accessorKey: MR
    key: MR
    id: MR
    label: MR
    position: 6
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  XP:
    input: number
    key: XP
    accessorKey: XP
    label: XP
    position: 10
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Race:
    input: text
    accessorKey: Race
    key: Race
    id: Race
    label: Race
    position: 11
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Class:
    input: text
    accessorKey: Class
    key: Class
    id: Class
    label: Class
    position: 12
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Alignment:
    input: text
    accessorKey: Alignment
    key: Alignment
    id: Alignment
    label: Alignment
    position: 13
    skipPersist: false
    isHidden: false
    sortIndex: -1
    isSorted: false
    isSortedDesc: true
    width: 250
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Size:
    input: text
    accessorKey: Size
    key: Size
    id: Size
    label: Size
    position: 14
    skipPersist: false
    isHidden: false
    sortIndex: -1
    isSorted: false
    isSortedDesc: false
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Type:
    input: text
    accessorKey: Type
    key: Type
    id: Type
    label: Type
    position: 15
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  SubType:
    input: text
    accessorKey: SubType
    key: SubType
    id: SubType
    label: SubType
    position: 16
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Initiative:
    input: text
    accessorKey: Initiative
    key: Initiative
    id: Initiative
    label: Initiative
    position: 17
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Senses:
    input: text
    accessorKey: Senses
    key: Senses
    id: Senses
    label: Senses
    position: 18
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Aura:
    input: text
    accessorKey: Aura
    key: Aura
    id: Aura
    label: Aura
    position: 19
    skipPersist: false
    isHidden: false
    sortIndex: -1
    isSorted: false
    isSortedDesc: true
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  AC:
    input: text
    accessorKey: AC
    key: AC
    id: AC
    label: AC
    position: 20
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  HP:
    input: text
    accessorKey: HP
    key: HP
    id: HP
    label: HP
    position: 22
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  HPMods:
    input: text
    accessorKey: HPMods
    key: HPMods
    id: HPMods
    label: HPMods
    position: 24
    skipPersist: false
    isHidden: false
    sortIndex: -1
    isSorted: false
    isSortedDesc: true
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Fortitude:
    input: text
    accessorKey: Fortitude
    key: Fortitude
    id: Fortitude
    label: Fortitude
    position: 25
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Reflex:
    input: text
    accessorKey: Reflex
    key: Reflex
    id: Reflex
    label: Reflex
    position: 26
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Will:
    input: text
    accessorKey: Will
    key: Will
    id: Will
    label: Will
    position: 27
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  SaveMods:
    input: text
    accessorKey: SaveMods
    key: SaveMods
    id: SaveMods
    label: SaveMods
    position: 28
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  DefensiveAbilities:
    input: text
    accessorKey: DefensiveAbilities
    key: DefensiveAbilities
    id: DefensiveAbilities
    label: DefensiveAbilities
    position: 29
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  DR:
    input: text
    accessorKey: DR
    key: DR
    id: DR
    label: DR
    position: 30
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Immunities:
    input: text
    accessorKey: Immunities
    key: Immunities
    id: Immunities
    label: Immunities
    position: 31
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Resist:
    input: text
    accessorKey: Resist
    key: Resist
    id: Resist
    label: Resist
    position: 32
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  SR:
    input: text
    accessorKey: SR
    key: SR
    id: SR
    label: SR
    position: 33
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Weaknesses:
    input: text
    accessorKey: Weaknesses
    key: Weaknesses
    id: Weaknesses
    label: Weaknesses
    position: 34
    skipPersist: false
    isHidden: false
    sortIndex: -1
    isSorted: false
    isSortedDesc: true
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Space:
    input: text
    accessorKey: Space
    key: Space
    id: Space
    label: Space
    position: 35
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Speed:
    input: text
    accessorKey: Speed
    key: Speed
    id: Speed
    label: Speed
    position: 36
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  MoveMods:
    input: text
    accessorKey: MoveMods
    key: MoveMods
    id: MoveMods
    label: MoveMods
    position: 37
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Burrow:
    input: text
    accessorKey: Burrow
    key: Burrow
    id: Burrow
    label: Burrow
    position: 38
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Climb:
    input: text
    accessorKey: Climb
    key: Climb
    id: Climb
    label: Climb
    position: 39
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Fly:
    input: text
    accessorKey: Fly
    key: Fly
    id: Fly
    label: Fly
    position: 40
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Maneuverability:
    input: text
    accessorKey: Maneuverability
    key: Maneuverability
    id: Maneuverability
    label: Maneuverability
    position: 41
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Swim:
    input: text
    accessorKey: Swim
    key: Swim
    id: Swim
    label: Swim
    position: 42
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  MeleeList:
    input: formula
    accessorKey: MeleeList
    key: MeleeList
    id: MeleeList
    label: Melee
    position: 43
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      formula_query: ${row.Melee.map(m => `${m.Attack} (${m.Effect})`).join(', ')}
  Reach:
    input: text
    accessorKey: Reach
    key: Reach
    id: Reach
    label: Reach
    position: 44
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  RangedList:
    input: formula
    accessorKey: RangedList
    key: RangedList
    id: RangedList
    label: Ranged
    position: 45
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      formula_query: ${row.Ranged.map(r => `${r.Attack} (${r.Effect})`).join(', ')}
  SpecialAttacks:
    input: text
    accessorKey: SpecialAttacks
    key: SpecialAttacks
    id: SpecialAttacks
    label: SpecialAttacks
    position: 46
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  BAB:
    input: text
    accessorKey: BAB
    key: BAB
    id: BAB
    label: BAB
    position: 53
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  CMB:
    input: text
    accessorKey: CMB
    key: CMB
    id: CMB
    label: CMB
    position: 54
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  CMD:
    input: text
    accessorKey: CMD
    key: CMD
    id: CMD
    label: CMD
    position: 55
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Languages:
    input: text
    accessorKey: Languages
    key: Languages
    id: Languages
    label: Languages
    position: 59
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  SQ:
    input: text
    accessorKey: SQ
    key: SQ
    id: SQ
    label: SQ
    position: 60
    skipPersist: false
    isHidden: false
    sortIndex: -1
    isSorted: false
    isSortedDesc: true
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Environment:
    input: text
    accessorKey: Environment
    key: Environment
    id: Environment
    label: Environment
    position: 67
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Temperature:
    input: text
    accessorKey: Temperature
    key: Temperature
    id: Temperature
    label: Temperature
    position: 68
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Organization:
    input: text
    accessorKey: Organization
    key: Organization
    id: Organization
    label: Organization
    position: 70
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Treasure:
    input: text
    accessorKey: Treasure
    key: Treasure
    id: Treasure
    label: Treasure
    position: 71
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
config:
  remove_field_when_delete_column: false
  cell_size: normal
  sticky_first_column: true
  remove_empty_folders: true
  automatically_group_files: true
  hoist_files_with_empty_attributes: true
  show_metadata_created: false
  show_metadata_modified: false
  show_metadata_tasks: false
  show_metadata_inlinks: false
  show_metadata_outlinks: false
  source_data: current_folder
  source_form_result: 
  source_destination_path: /
  row_templates_folder: 00 Scripts/Templater
  current_row_template: 
  pagination_size: 25
  font_size: 16
  enable_js_formulas: false
  formula_folder_path: /
  inline_default: false
  inline_new_position: last_field
  date_format: yyyy-MM-dd
  datetime_format: "yyyy-MM-dd HH:mm:ss"
  metadata_date_format: "yyyy-MM-dd HH:mm:ss"
  enable_footer: false
  implementation: default
  show_metadata_tags: false
  group_folder_column: Type
filters:
  enabled: false
  conditions:
```