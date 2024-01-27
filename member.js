function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'views/skills-member.html',
    controller: 'SkillsMemberCtrl',
    controllerAs: 'skillsMemberCtrl',
    bindToController: true,
    scope: {
      member: '=',
      skills: '='
    }
  };
}